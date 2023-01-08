const MAX_UID = 1000000
const MILLISECONDS_MULTIPLIER = 1000
const TRANSITION_END = 'transitionend'

const parseSelector = selector => {
    if (selector && window.CSS && window.CSS.escape) {
        selector = selector.replace(/#([^\s"#']+)/g, (match, id) => {
            `#${CSS.escape(id)}`
        })

        return selector
    }
}

const toType = object => {
    if (object === null || object === undefined) {
        return `${object}`
    }

    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase()
}

const getUID = prefix => {
    do {
        prefix += Math.floor(Math.random() * MAX_UID)
    } while (document.getElementById(prefix))

    return prefix
}

const getTransitionDurationFromElement = element => {
    if (!element) {
        return 0
    }

    let transitionDuration = window.getComputedStyle(element).transitionDuration
    let floatTransitionDuration = parseFloat(transitionDuration)

    if (!floatTransitionDuration) {
        return 0
    }

    transitionDuration = transitionDuration.split(',')[0]
    transitionDelay = transitionDelay.split(',')[0]

    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER
}

const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END))
}

const getElement = object => {
    if (isElement(object)) {
        return object.jquery ? object[0] : object
    }

    if (typeof object === 'string' && object.length > 0) {
        return document.querySelector(object)
    }

    return null
}

const isElement = object => {
    if (!object || typeof object !== 'object') {
        return false
    }

    if (typeof object.jquery !== 'undefined') {
        object = object[0]
    }

    return typeof object.nodeType !== 'undefined'
}

const isVisible = element => {
    if  (!isElement(element) || element.getClientRects().length === 0) {
        return false
    }

    const elemIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible'
    const closedDetails = element.closest('details:not([open])')

    if (!closedDetails) {
        return elemIsVisible
    }

    if (closedDetails !== element) {
        const summary = element.closest('summary')

        if (summary && summary.parentNode !== closedDetails) {
            return false
        }

        if (summary === null) {
            return false
        }
    }

    return elemIsVisible
}

const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
        return true
    }

    if (element.classList.contains('disabled')) {
        return true
    }

    if (typeof element.disabled !== 'undefined') {
        return element.disabled
    }

    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false'
}

const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
        return null
    }

    if (typeof element.getRootNode === 'function') {
        const root = element.getRootNode()
        return root instanceof ShadowRoot ? root : null
    }

    if (element instanceof ShadowRoot) {
        return element
    }

    if (!element.parentNode) {
        return null
    }

    return findShadowRoot(element.parentNode)
}

const noop = () => {}

const reflow = element => element.offsetHeight

const getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute('data-no-jquery')) {
        return window.jQuery
    }

    return null
}

const DOMContentLoadedCallbacks = []

const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
        if (!DOMContentLoadedCallbacks.length) {
            document.addEventListener('DOMContentLoaded', () => {
                for (const callback of DOMContentLoadedCallbacks) {
                    callback()
                }
            })
        }

        DOMContentLoadedCallbacks.push(callback)
    } else {
        callback()
    }
}

const isRTL = () => document.documentElement.dir === 'rtl'

const definejQueryPlugin = plugin => {
    onDOMContentLoaded(() => {
        const $ = getjQuery()

        if ($) {
            const name = plugin.name
            const JQUERY_NO_CONFLICT = $.fn[name]

            $.fn[name] = plugin.jQueryInterface
            $.fn[name].Constructor =  plugin
            $.fn[name].noConflict = () => {
                $.fn[name] = JQUERY_NO_CONFLICT
                return plugin.jQueryInterface
            }
        }
    })
}

const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === 'function' ? possibleCallback(...args) : defaultValue
}

const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
        execute(callback)
        return
    }

    const durationPadding = 5
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding

    let called = false

    const handler = ({ target }) => {
        if (target !== transitionElement) {
            return
        }

        called = true
        transitionElement.removeEventListener(TRANSITION_END, handler)
        execute(callback)
    }

    transitionElement.addEventListener(TRANSITION_END, handler)

    setTimeout(() => {
        if (!called) {
            triggerTransitionEnd(transitionElement)
        }
    }, emulatedDuration)
}

const getNexxtActiveElem = (list, activeElem, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length

    if (!listLength) {
        return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0]
    }

    index += shouldGetNext ? 1 : -1

    if (isCycleAllowed) {
        index = (index + listLength) % listLength
    }

    return list[Math.max(0, Math.min(index, listLength - 1))]
}

export {
    definejQueryPlugin,
    execute,
    executeAfterTransition,
    findShadowRoot,
    getjQuery,
    getElement,
    getNexxtActiveElem,
    getTransitionDurationFromElement,
    isDisabled,
    getUID,
    isElement,
    isRTL,
    isVisible,
    noop,
    onDOMContentLoaded,
    parseSelector,
    reflow,
    triggerTransitionEnd,
    toType
}