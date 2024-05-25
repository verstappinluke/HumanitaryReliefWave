/*
 Humanitary Relief Wave
 Project files are compiled with gulp. See source for modifications

 @author DNL Omnimedia, Inc. <info@dnlomnimedia.com>
 @version 3.29.5
 @build 2020-09-17T21:22:34.976Z
 @license (c) Copyright DNL Omnimedia Inc. 2020.  All rights reserved. This source code is confidential and proprietary information of DNL Ominmedia, Inc. and may be used only by a recipient designated by and for the purposes permitted by DNL Ominmedia, Inc. in writing.  Reproduction of, dissemination of, modifications to or creation of derivative works from this source code, whether in source or binary forms, by any means and in any form or manner, is expressly prohibited, except with the prior written permission of DNL Ominmedia, Inc. .  THIS CODE AND ANY ADDITIONAL INFORMATION ARE PROVIDED AS IS WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE. This notice may not be removed from the software by any user thereof.

*/
'use strict';
(function(window, document, $, undefined) {
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
    };
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable =
                    true;
                Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor
        }
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var LomEnvironment = function() {
        function LomEnvironment() {
            var options = arguments.length > 0 && arguments[0] !==
                undefined ? arguments[0] : {};
            _classCallCheck(this, LomEnvironment);
            this.nonsecurePath = "//support.savethechildren.org/site/";
            this.securePath = "//support.savethechildren.org/site/";
            if (typeof luminateExtend !== "undefined" && typeof luminateExtend.global.path !== "undefined") {
                this.securePath = luminateExtend.global.path.secure;
                this.nonsecurePath = luminateExtend.global.path.nonsecure
            }
        }
        _createClass(LomEnvironment, [{
            key: "getSecurePath",
            value: function getSecurePath() {
                return this.securePath
            }
        }, {
            key: "getNonsecurePath",
            value: function getNonsecurePath() {
                return this.nonsecurePath
            }
        }]);
        return LomEnvironment
    }();
    var detectEnvironmentMap = {
        "support.savethechildren.org": "production"
    };
    var detectEnvironment = function detectEnvironment() {
        var defaultEnv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "development";
        var envMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : detectEnvironmentMap;
        var hostnameArg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var hostname = !hostnameArg ? _.get(window.location, "hostname", "") : hostnameArg;
        return _.get(envMap, hostname,
            defaultEnv)
    };
    var envIsProduction = function envIsProduction(defaultEnv, envMap, hostnameArg) {
        return detectEnvironment(defaultEnv, envMap, hostnameArg) === "production"
    };
    var envIsDevelopment = function envIsDevelopment(defaultEnv, envMap, hostnameArg) {
        return detectEnvironment(defaultEnv, envMap, hostnameArg) === "development"
    };
    var envCondValue = function envCondValue(devValue, prodValue, defaultEnv, envMap, hostnameArg) {
        if (envIsDevelopment(defaultEnv, envMap, hostnameArg)) return devValue;
        else if (envIsProduction(defaultEnv,
                envMap, hostnameArg)) return prodValue;
        throw "Could not determine environment";
    };
    var envGenerator = _.curry(_.get, 2);
    var lomPaths = new LomEnvironment;
    var env = envGenerator({
        assets: {
            path: envCondValue("https://d290h2g0ajcvb3.cloudfront.net", "https://dx2eq2oh924g4.cloudfront.net")
        },
        environment: detectEnvironment(),
        lom: {
            nonsecurePath: lomPaths.getNonsecurePath(),
            securePath: lomPaths.getSecurePath(),
            surveys: {
                "writeToChild": {
                    id: envCondValue(1521, 1521),
                    questions: {
                        sponsorMsg: {
                            id: envCondValue(1366, 1366)
                        },
                        sponsorEmail: {
                            id: envCondValue(2082,
                                2204)
                        }
                    }
                }
            }
        },
        proxy: {
            endpoint: envCondValue("https://lo-bbis-stg.savethechildren.org", "https://lo-bbis.savethechildren.org"),
            ssoPageId: envCondValue(375, 379)
        },
        ods: {
            endpoint: envCondValue("https://stcp.azure-api.net/luminate-dev/v1.0/odata/", "https://stcp.azure-api.net/luminate/v1.0/odata/"),
            key: envCondValue("e014abfcdcf94c8a9585fb93e5ccc557", "a6fede8dd9a2463196412e07039919c3")
        },
        pdfServer: {
            endpoint: envCondValue("https://pdfs-dev.savethechildren.org", "https://pdfs.savethechildren.org")
        }
    });
    window.env = env;

    function debounce(func, threshold, execAsap) {
        var timeout;
        return function debounced() {
            var obj = this,
                args = arguments;

            function delayed() {
                if (!execAsap) func.apply(obj, args);
                timeout = null
            }
            if (timeout) clearTimeout(timeout);
            else if (execAsap) func.apply(obj, args);
            timeout = setTimeout(delayed, threshold || 100)
        }
    }
    window.debounce = debounce;

    function debounce(func, threshold, execAsap) {
        var timeout;
        return function debounced() {
            var obj = this,
                args = arguments;

            function delayed() {
                if (!execAsap) func.apply(obj, args);
                timeout = null
            }
            if (timeout) clearTimeout(timeout);
            else if (execAsap) func.apply(obj, args);
            timeout = setTimeout(delayed, threshold || 100)
        }
    }
    window.debounce = debounce;

    function isLanguage(lang) {
        var urlParam = "s_lang";
        var currentLang = getUrlVar(window.location.href, urlParam);
        if (currentLang === lang) return true;
        return false
    }
    window.isLanguage = isLanguage;

    function impressionAnalytics(regionDetails) {
        try {
            window._dtm("triggerImpression", regionDetails)
        } catch (e) {
            console.error(e)
        }
    }
    window.impressionAnalytics = impressionAnalytics;

    function trackBillingPageViewAnalytics() {
        try {
            window._dtm("track",
                "ecommerce_billing_view")
        } catch (e) {
            console.error(e)
        }
    }
    window.trackBillingPageViewAnalytics = trackBillingPageViewAnalytics;

    function trackCartPageViewAnalytics() {
        try {
            window._dtm("track", "ecommerce_cart_view")
        } catch (e) {
            console.error(e)
        }
    }
    window.trackCartPageViewAnalytics = trackCartPageViewAnalytics;

    function trackPageViewAnalytics() {
        try {
            window._dtm("track", "page_view")
        } catch (e) {
            console.error(e)
        }
    }
    window.trackPageViewAnalytics = trackPageViewAnalytics;

    function trackReviewPageViewAnalytics() {
        try {
            window._dtm("track",
                "ecommerce_review_view")
        } catch (e) {
            console.error(e)
        }
    }
    window.trackReviewPageViewAnalytics = trackReviewPageViewAnalytics;

    function trackVirtualPageViewAnalytics(pageName) {
        try {
            if (typeof pageName !== "undefined") window._dtm("triggerVirtualPageView", {
                metaPageName: pageName,
                metaSubCategory1: pageName
            });
            else window._dtm("triggerVirtualPageView")
        } catch (e) {
            console.error(e)
        }
    }
    window.trackVirtualPageViewAnalytics = trackVirtualPageViewAnalytics;

    function videoAnalytics() {
        try {
            window._dtm("track", "yt_pd")
        } catch (e) {
            console.error(e)
        }
    }
    window.videoAnalytics = videoAnalytics;

    function addPictureFill() {
        document.createElement("picture");
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.2/picturefill.min.js", function() {})
    }
    $.fn.addToggleLinkToParent = function($menuButton) {
        var $menus = this;
        var $parentLinks;
        var $parentItems;
        var $toggleArea = $('\x3cspan class\x3d"menu__toggle" /\x3e');
        var $toggleSpans;
        if (typeof $menus !== "undefined") {
            $parentLinks = $menus.find("a:not(.menu__link--basket)").filter(":not(:only-child)");
            $parentLinks.after($toggleArea);
            $parentItems = $parentLinks.closest("li");
            $toggleSpans = $parentItems.find(".menu__toggle");
            $toggleSpans.on("click", function(event) {
                handleSubmenuToggleClick(event, $parentItems);
                $toggleSpans.adjustToggleSpansHeight($menuButton)
            });
            $menuButton.on("click", function(event) {
                $toggleSpans.adjustToggleSpansHeight($menuButton)
            });
            $(window).smartEvent("resize", function(event) {
                $toggleSpans.adjustToggleSpansHeight($menuButton)
            })
        }
        return $menus
    };

    function addURLParam(URL, param, value) {
        var newUrl = URL;
        if (URL.indexOf(param) ===
            -1)
            if (URL.indexOf("?") === -1) newUrl += "?" + param + "\x3d" + value;
            else newUrl += "\x26" + param + "\x3d" + value;
        return newUrl
    }
    $.fn.adjustToggleSpansHeight = function($menuButton) {
        var $toggleSpans = this;
        $toggleSpans.removeAttr("style");
        if ($menuButton.is(":visible")) $toggleSpans.each(setToggleSpanHeight);
        return $toggleSpans
    };
    $.fn.closeOpenItems = function() {
        var $menu = this;
        var $parentItems = $menu.find(".js-menu__item--open");
        $parentItems.removeClass("js-menu__item--open")
    };
    $.fn.disableButtonOnSubmit = function(hasBeenClicked) {
        var $buttons =
            this;
        $buttons.each(function(index, element) {
            var $button = $(element);
            if (hasBeenClicked) $button.disableButton();
            else $button.on("click", function(e) {
                setTimeout(function() {
                    $button.disableButton(e)
                }, 1)
            })
        });
        return $buttons
    };
    $.fn.disableButton = function() {
        var $form = this.closest("form");
        if ($form.get(0).checkValidity()) this.prop("disabled", "disabled")
    };
    $.fn.getButtonSources = function() {
        var $button = this;
        var arrayElement;
        var sourcesString = $button.attr("data-source");
        var sources = [];
        if (typeof sourcesString !== "undefined") sources =
            sourcesString.split(", ");
        for (var i = 0; i < sources.length; i++) {
            arrayElement = sources[i];
            sources[i] = $(arrayElement)
        }
        return sources
    };
    $.fn.getButtonTargetContainer = function($target) {
        var $button = this;
        var $targetContainer;
        if (typeof $button.attr("data-target") !== "undefined") $targetContainer = $target.find($button.attr("data-target-container"));
        if (typeof $targetContainer === "undefined") $targetContainer = $target;
        return $targetContainer
    };
    $.fn.getButtonTarget = function() {
        var $button = this;
        var $target;
        if (typeof $button.attr("data-target") !==
            "undefined") $target = $body.find($button.attr("data-target"));
        return $target
    };

    function getMenus(menuSources) {
        var arrayElement;
        var arrayLength = menuSources.length;
        var $menus;
        for (var i = 0; i < arrayLength; i++) {
            arrayElement = menuSources[i];
            if (typeof $menus === "undefined") $menus = $(arrayElement);
            else $menus = $menus.add($(arrayElement))
        }
        return $menus
    }

    function getUrlVars(URL) {
        var hash;
        var hashes;
        var vars = [];
        URL = URL.replace(/&amp;/g, "\x26");
        hashes = URL.slice(URL.indexOf("?") + 1).split("\x26");
        for (var i = 0; i < hashes.length; i++) {
            hash =
                hashes[i].split("\x3d");
            vars.push(hash[0]);
            vars[hash[0]] = hash[1]
        }
        return vars
    }

    function getUrlVar(URL, name) {
        return getUrlVars(URL)[name]
    }
    window.getUrlVars = getUrlVars;
    window.getUrlVar = getUrlVar;

    function handleSubmenuToggleClick(event, $parentItems) {
        var $currentItem = $(event.currentTarget).closest("li");
        var $currentParent = $currentItem.parents("li");
        var $itemsToClose = $parentItems.not($currentParent).not($currentItem);
        $itemsToClose.removeClass("js-menu__item--open");
        $currentItem.toggleClass("js-menu__item--open")
    }
    $.fn.hideBasketCount = function() {
        var $basketItem = this;
        $basketItem.addClass("js-hidden");
        return $basketItem
    };

    function hideSources(event, $menuButton, $searchButton) {
        var clickedItemTag = event.target.tagName.toLowerCase();
        if (clickedItemTag !== "a" && clickedItemTag !== "button" && clickedItemTag !== "input" && clickedItemTag !== "li" && clickedItemTag !== "ul" && clickedItemTag !== "span" && clickedItemTag !== "img") {
            if ($menuButton.is(":visible") || $searchButton.is(":visible")) {
                event.preventDefault();
                event.stopPropagation()
            }
            if ($menuButton.is(":visible") &&
                $menuButton.hasClass("js-nav__button--open")) $menuButton.trigger("click");
            if ($searchButton.is(":visible") && $searchButton.hasClass("js-nav__button--open")) $searchButton.trigger("click")
        }
    }
    $.fn.inputToLowerCase = function() {
        var $input = this;
        $input.on("blur", function() {
            var $input = $(this);
            var converted;
            var string = $input.val();
            converted = string.toLocaleLowerCase();
            $input.val(converted)
        })
    };

    function isBrowser(browserType, userAgent) {
        var returnValue = false;
        var ua = window.navigator.userAgent.toLowerCase();
        if (typeof userAgent !==
            "undefined") ua = userAgent.toLowerCase();
        browserType = browserType.toLowerCase();
        if (browserType === "ie") {
            if (ua.indexOf("msie ") > -1 || ua.indexOf("trident/") > -1) returnValue = true
        } else if (browserType === "ie10") {
            if (ua.indexOf("msie 10") > -1) returnValue = true
        } else if (browserType === "edge") {
            if (ua.indexOf("edge/") > -1 || ua.indexOf("edg/") > -1) returnValue = true
        } else if (browserType === "edgeold") {
            if (ua.indexOf("edge/15") > -1 || ua.indexOf("edge/16") > -1 || ua.indexOf("edge/17") > -1 || ua.indexOf("edge/18") > -1) returnValue = true
        } else if (browserType ===
            "webkit") {
            if (ua.indexOf("webkit") > -1 && ua.indexOf("edge/") === -1 && ua.indexOf("edg/") === -1) returnValue = true
        } else if (browserType === "opera") {
            if (ua.indexOf("webkit") > -1 && ua.indexOf("opr/") > -1) returnValue = true
        } else if (browserType === "firefox") {
            if (ua.indexOf("firefox/") > -1) returnValue = true
        } else if (browserType === "gecko")
            if (ua.indexOf("gecko/") > -1) returnValue = true;
        return returnValue
    }
    window.isBrowser = isBrowser;

    function isInIframe() {
        try {
            return window.self !== window.top
        } catch (e) {
            return true
        }
    }

    function loadScript(url,
        callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (script.readyState) script.onreadystatechange = function() {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback()
            }
        };
        else script.onload = function() {
            callback()
        };
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script)
    }
    $.fn.modifyYoutubeLinks = function() {
        var $links = this;
        $links.each(function(index, element) {
            var $link = $(element);
            var linkUrl = $link.attr("href");
            if (linkUrl.indexOf("youtube.com") !== -1 || linkUrl.indexOf("youtu.be") !== -1) {
                linkUrl = addURLParam(linkUrl, "enablejsapi", "1");
                linkUrl = addURLParam(linkUrl, "rel", "0")
            }
            $link.attr("href", linkUrl)
        });
        return $links
    };
    $.fn.moveElement = function($element, $mobileContainer, $desktopContainer) {
        var $button = this;
        if ($button.is(":visible")) $mobileContainer.append($element);
        else $desktopContainer.prepend($element);
        return $button
    };
    $.fn.moveOneSource = function($source, $mobileContainer) {
        var $button = this;
        var $desktopContainer =
            $source.parent();
        $button.moveElement($source, $mobileContainer, $desktopContainer);
        $(window).smartEvent("resize", function(event) {
            $source.closeOpenItems();
            $button.moveElement($source, $mobileContainer, $desktopContainer)
        });
        return $button
    };
    $.fn.moveSources = function($mobileContainer, sources) {
        var $button = this;
        var arrayLength = sources.length;
        if (typeof sources !== "undefined" && arrayLength > 0)
            for (var index = 0; index < arrayLength; index++) $button.moveOneSource(sources[index], $mobileContainer);
        return $button
    };
    $.fn.replaceCheckRadio =
        function() {
            var $inputs = $(this);
            $inputs.each(function(index, element) {
                var $input = $(element);
                var inputName = _.isString($input.attr("name")) ? $input.attr("name") : "";
                var $span = $("\x3cspan\x3e\x3c/span\x3e");
                var $wrap = $('\x3cspan class\x3d"input__wrapper"\x3e\x3c/span\x3e');
                if (!$input.hasClass("js-hidden") && inputName !== "responsive_payment_typepay_typeradio" && inputName.indexOf("donation_level") === -1 && inputName.indexOf("level_standardexpanded") === -1) {
                    $input.after($wrap);
                    $wrap.append($input);
                    if ($input.attr("type") ===
                        "checkbox") {
                        $span.addClass("checkbox");
                        $input.after($span)
                    }
                    if ($input.attr("type") === "radio") {
                        $span.addClass("radio");
                        $input.after($span)
                    }
                    $input.addClass("js-hidden");
                    $input.removeClass("radio");
                    $span.on("click", triggerInputClick)
                }
            });
            return $inputs
        };

    function triggerInputClick(event) {
        $(event.currentTarget).siblings("input").trigger("click")
    }
    $.fn.replaceWbr = function($banner, $main) {
        var $body = this;
        $body.addClass("webkit");
        $banner.find("wbr").replaceWith('\x3cspan class\x3d"wbr" /\x3e');
        $main.find("wbr").replaceWith('\x3cspan class\x3d"wbr" /\x3e');
        return $body
    };
    $.fn.setTabContainerHeight = function($tabs, $tabNav, $tabContents) {
        var $tabContainer = this;
        var tallestTab = 0;
        var newContainerHeight = 0;
        $tabContainer.removeProp("style").height("auto");
        $tabs.each(function() {
            var $myTab = $(this);
            var myTabHeight;
            if ($myTab.hasClass("js-hidden")) {
                $myTab.removeClass("js-hidden");
                myTabHeight = $myTab.innerHeight();
                $myTab.addClass("js-hidden")
            } else myTabHeight = $myTab.innerHeight();
            if (myTabHeight > tallestTab) tallestTab = myTabHeight
        });
        newContainerHeight = $tabNav.outerHeight(true) +
            $tabContents.outerHeight(true) - $tabs.filter(".js-active").innerHeight() + tallestTab;
        $tabContainer.height(newContainerHeight);
        return $tabContainer
    };

    function setToggleSpanHeight(index, element) {
        var $link;
        var $toggleSpan = $(element);
        var linkHeight;
        $link = $toggleSpan.siblings("a");
        linkHeight = $link.innerHeight();
        if (linkHeight > 36) $toggleSpan.css("height", linkHeight + "px")
    }
    $.fn.showBasketCount = function(itemsCount) {
        var $basketItem = this;
        var $basketItemsCount = $basketItem.find("#menu__basket-items");
        $basketItemsCount.text(itemsCount);
        $basketItem.removeClass("js-hidden").removeClass("hidden");
        return $basketItem
    };

    function signUpSubmitHandler($myForm) {
        var email = $myForm.find('input[name\x3d"cons_email"]').val();
        var formData = $myForm.find(":input:not(:hidden)").serialize();
        var sourceCode = $myForm.find('input[name\x3d"source"]').val();
        var subSourceCode = $myForm.find('input[name\x3d"sub_source"]').val();
        var surveyId = $myForm.find('input[name\x3d"SURVEY_ID"]').val();
        var denySubmit = $myForm.find('input[name\x3d"denySubmit"]').val();
        var enewsletterUrl =
            $myForm.find('input[name\x3d"enewsletterUrl"]').val();
        var firstName = $myForm.find('input[name\x3d"cons_first_name"]').val();
        formData = formData.replace("4368_1441_2", "question");
        formData = "survey_id\x3d" + surveyId + "\x26" + formData;
        if (typeof sourceCode !== "undefined") formData += "\x26source\x3d" + sourceCode;
        if (typeof subSourceCode !== "undefined") formData += "\x26sub_source\x3d" + subSourceCode;
        if (denySubmit.length > 0) formData += "\x26denyApiSubmit\x3d" + denySubmit;
        else if (enewsletterUrl.length > 0) formData += "\x26denyApiSubmit\x3d" +
            enewsletterUrl;
        $myForm.find(".form__error").remove();
        luminateExtend.api.request({
            "api": "survey",
            "data": "method\x3dsubmitSurvey\x26" + formData,
            "callback": function callback(data) {
                $myForm.signUpSurveySubmission(data, firstName, email)
            },
            "requiresAuth": true,
            "useHTTPS": true
        });
        return false
    }

    function pledgeSubmitHandler($myForm) {
        var formData = $myForm.find(":input:not(:hidden)").serialize();
        var sourceCode = $myForm.find('input[name\x3d"source"]').val();
        var subSourceCode = $myForm.find('input[name\x3d"sub_source"]').val();
        var surveyId = $myForm.find('input[name\x3d"SURVEY_ID"]').val();
        formData = formData.replace(/4368_1983_[0-9]_/g, "question_");
        formData = "survey_id\x3d" + surveyId + "\x26" + formData;
        if (typeof sourceCode !== "undefined") formData += "\x26source\x3d" + sourceCode;
        if (typeof subSourceCode !== "undefined") formData += "\x26sub_source\x3d" + subSourceCode;
        luminateExtend.api.request({
            "api": "survey",
            "data": "method\x3dsubmitSurvey\x26" + formData,
            "callback": function callback(data) {
                $myForm.pledgeSurveySubmission(data)
            },
            "requiresAuth": true,
            "useHTTPS": true
        });
        return false
    }
    $.fn.pledgeSurveySubmission = function(data) {
        var $myForm = this;
        var error = data.errorResponse;
        var errorMessage;
        var response = data.submitSurveyResponse;
        if (typeof error !== "undefined") errorMessage = error.message;
        else if (typeof response.errors !== "undefined") {
            error = response.errors;
            if (error.errorCode === "1734") errorMessage = "We are not able to sign you up, as you are signed in as a different user."
        }
        if (typeof errorMessage !== "undefined") setAnalyticsError(422, errorMessage, "pledge form error");
        else {
            $(".changemaker-pledge-form").hide();
            $(".changemaker-pledge-thank-you").show()
        }
    };
    $(".changemaker-pledge__form").submit(function(event) {
        event.preventDefault();
        pledgeSubmitHandler($(".changemaker-pledge__form"))
    });
    $.fn.signUpSurveySubmission = function(data, firstName, email) {
        var $myForm = this;
        var error = data.errorResponse;
        var errorMessage;
        var response = data.submitSurveyResponse;
        if (typeof error !== "undefined") errorMessage = error.message;
        else if (typeof response.errors !== "undefined") {
            error = response.errors;
            if (error.errorCode === "1734") errorMessage = "We are not able to sign you up, as you are signed in as a different user."
        }
        if (typeof errorMessage !== "undefined") {
            $myForm.find(".form__row--columns").eq(0).before('\x3cp class\x3d"form__error form__error--main"\x3e' + errorMessage + "\x3c/p\x3e");
            setAnalyticsError(422, errorMessage, "sign up form error")
        } else {
            $myForm.hide();
            $myForm.siblings(".form__thank-you").show();
            Cookies.set("stc-sign-up-submitted", 1, {
                expires: 365,
                path: "/",
                domain: window.cookieDomain
            });
            window.getUserInfoSetAnalytics("sign up",
                firstName);
            dataLayer = dataLayer || [];
            dataLayer.push({
                "event": "onemail",
                "type": "marketing",
                "email": email
            });
            try {
                var usableForm = document.getElementById($myForm.attr("id"));
                if (usableForm !== null && typeof usableForm !== "undefined") {
                    var leadgenEvent = new CustomEvent("leadgenPX", {
                        detail: {
                            "surveyId": usableForm["SURVEY_ID"].value,
                            "name": usableForm["name"]
                        }
                    });
                    usableForm.dispatchEvent(leadgenEvent)
                }
            } catch (e) {
                console.log(e.message)
            }
            var redirectURL = $myForm.attr("data-redirect-url");
            if (redirectURL) window.location.href =
                redirectURL
        }
    };

    function componentLuminateSubmitHandler($myForm) {
        var formData = $myForm.find(":input:not(:hidden)").serialize();
        var checkboxes = $myForm.find('input[type\x3d"checkbox"]').serialize();
        var sourceCode = $myForm.find('input[name\x3d"source"]').val();
        var subSourceCode = $myForm.find('input[name\x3d"sub_source"]').val();
        var surveyId = $myForm.find('input[name\x3d"SURVEY_ID"]').val();
        var denySubmit = $myForm.find('input[name\x3d"denySubmit"]').val();
        var cookieTest = document.cookie.match(/AMCV_.+%40AdobeOrg=.+%7CMCMID%7C([0-9\-]+)%7C/);
        if (sourceCode === "" && typeof digitalData !== "undefined" && typeof digitalData.page !== "undefined" && typeof digitalData.page.externalcampaigns !== "undefined" && typeof digitalData.page.externalcampaigns.sourcecode !== "undefined") {
            sourceCode = digitalData.page.externalcampaigns.sourcecode;
            $myForm.find("input[data-cid]").val(digitalData.page.externalcampaigns.sourcecode)
        }
        if (subSourceCode === "" && cookieTest !== null && typeof cookieTest !== "undefined" && cookieTest.length === 2) {
            subSourceCode = cookieTest[1];
            $myForm.find("input[data-mcid]").val(cookieTest[1])
        }
        var sourcecodes =
            $myForm.find("input[data-mcid], input[data-cid]").serialize();
        if (checkboxes && checkboxes != "") formData = formData + "\x26" + checkboxes;
        if (sourcecodes && sourcecodes != "") formData = formData + "\x26" + sourcecodes;
        formData = formData.replace(/[0-9]+_[0-9]+_[0-9]+_/g, "question_");
        formData = "survey_id\x3d" + surveyId + "\x26" + formData;
        if (sourceCode === "");
        if (typeof sourceCode !== "undefined") formData += "\x26source\x3d" + sourceCode;
        if (typeof subSourceCode !== "undefined") formData += "\x26sub_source\x3d" + subSourceCode;
        if (denySubmit.length >
            0) formData += "\x26denyApiSubmit\x3d" + denySubmit;
        luminateExtend.api.request({
            "api": "survey",
            "data": "method\x3dsubmitSurvey\x26" + formData,
            "callback": function callback(data) {
                $myForm.find(".form__error").remove();
                $myForm.find(".form__error--main").remove();
                $myForm.componentLuminateSurveySubmission(data)
            },
            "requiresAuth": true,
            "useHTTPS": true
        });
        return false
    }
    $.fn.componentLuminateSurveySubmission = function(data) {
        var $myForm = this;
        var error = data.errorResponse;
        var errorMessage;
        var response = data.submitSurveyResponse;
        var formErrorMessage;
        const formErrorCodes = ["1721", "1722", "1723", "1724", "1725", "1726", "1727", "1728", "1734", "1735", "1738", "1739", "1740"];
        const disableFormErrorCodes = ["1721", "1722", "1723", "1724", "1727"];
        $myForm.addClass("submitted");

        function handleErrorCode(errorCode, errorMsg, errorField) {
            if (formErrorCodes.includes(errorCode)) {
                formErrorMessage = errorMsg;
                $myForm.append('\x3cp class\x3d"form__error form__error--main"\x3e' + formErrorMessage + "\x3c/p\x3e");
                if (disableFormErrorCodes.includes(errorCode)) $myForm.find('button[type\x3d"submit"]').attr("disabled",
                    true)
            } else if ((errorCode === "1729" || errorCode === "1736") && errorField !== false) {
                let requiredErrorField;
                if (/^cons_/.test(errorField)) requiredErrorField = $myForm.find('[name\x3d"' + errorField + '"]');
                else requiredErrorField = $myForm.find('[name$\x3d"' + errorField + '"]');
                if (requiredErrorField.length > 0) {
                    requiredErrorField.attr("required", "required");
                    requiredErrorField.parent().find("label").prepend('\x3cspan class\x3d"formfield__required"\x3e*\x3c/span\x3e')
                } else if (errorCode === "1729") {
                    $myForm.append('\x3cp class\x3d"form__error form__error--main"\x3eThe specified survey is improperly configured.\x3c/p\x3e');
                    $myForm.find('button[type\x3d"submit"]').attr("disabled", true)
                } else if (errorCode === "1736") $myForm.append('\x3cp class\x3d"form__error form__error--main"\x3e' + errorMsg + "\x3c/p\x3e")
            } else if (errorCode === "1730") {
                let maxLengthErrorField;
                if (/^cons_/.test(errorField)) maxLengthErrorField = $myForm.find('[name\x3d"' + errorField + '"]');
                else maxLengthErrorField = $myForm.find('[name$\x3d"' + errorField + '"]');
                maxLengthErrorField.attr("maxlength", "255")
            } else if (errorCode === "1731") {
                let numberErrorField;
                if (/^cons_/.test(errorField)) numberErrorField =
                    $myForm.find('[name\x3d"' + errorField + '"]');
                else numberErrorField = $myForm.find('[name$\x3d"' + errorField + '"]');
                numberErrorField.attr("pattern", "^[0-9]*$");
                numberErrorField.parent().append('\x3cp class\x3d"formfield__helpmessage"\x3e' + errorMsg + "\x3c/p\x3e")
            } else if (errorCode === "1732" || errorCode === "1733") {
                let selectionErrorField;
                if (/^cons_/.test(errorField)) selectionErrorField = $myForm.find('[name\x3d"' + errorField + '"]');
                else selectionErrorField = $myForm.find('[name$\x3d"' + errorField + '"]');
                selectionErrorField.parent().append('\x3cp class\x3d"form__error"\x3e' +
                    errorMsg + "\x3c/p\x3e")
            } else if (errorCode === "1737") {
                let errorParent;
                if (/^cons_birth/.test(errorField)) errorParent = $myForm.find('[name\x3d"' + errorField + '"]').parent("fieldset");
                else errorParent = $myForm.find('[name\x3d"' + errorField + '"]').parent();
                errorParent.append('\x3cp class\x3d"formfield__helpmessage"\x3e' + errorMsg + "\x3c/p\x3e")
            }
        }
        if (typeof error !== "undefined") {
            errorMessage = error.message;
            handleErrorCode(error.code, error.message, false)
        } else if (typeof response.errors !== "undefined") {
            error = response.errors;
            let errors = response.errors || {};
            if (typeof errors.errorCode === "undefined")
                for (let errorItem in errors) handleErrorCode(errors[errorItem].errorCode, errors[errorItem].errorMessage, errors[errorItem].errorField != null ? errors[errorItem].errorField : typeof errors[errorItem].questionInError != "undefined" ? errors[errorItem].questionInError : false);
            else handleErrorCode(errors.errorCode, errors.errorMessage, errors.errorField != null ? errors.errorField : typeof errors.questionInError != "undefined" ? errors.questionInError : false)
        }
        if (typeof errorMessage !==
            "undefined" || typeof response.errors !== "undefined") setAnalyticsError(422, errorMessage, "survey form error");
        else {
            $myForm.hide();
            $myForm.prev(".formcontainer__intro").hide();
            $myForm.next(".formcontainer__ty").show();
            var sendToAnalytics = $myForm.attr("data-emailsignup");
            if (sendToAnalytics == "true") try {
                window._dtm("track", "email_submit")
            } catch (e) {
                console.error(e)
            }
            try {
                var leadgenEvent = new CustomEvent("leadgenPX", {
                    detail: {
                        "surveyId": $myForm[0]["SURVEY_ID"].value,
                        "name": $myForm[0]["name"]
                    }
                });
                $myForm[0].dispatchEvent(leadgenEvent)
            } catch (e) {
                console.log(e.message)
            }
            var redirectURL =
                $myForm.attr("data-redirect-url");
            if (redirectURL) window.location.href = redirectURL
        }
    };
    $(".formcontainer__form").submit(function(event) {
        event.preventDefault();
        componentLuminateSubmitHandler($(this))
    });
    var focusClass = function() {
        var $ele = $(this);
        $ele.addClass("focused");
        $ele.off("focus", focusClass)
    };
    $(".formcontainer__form select, .formcontainer__form input, .formcontainer__form textarea").focus(focusClass);
    $.fn.smartEvent = function(event, fn) {
        this.on(event, debounce(fn));
        return $(this)
    };
    $.fn.smoothScroll =
        function() {
            var $body = this;
            $body.on("mousewheel", function(event) {
                event.preventDefault();
                var wd = event.wheelDelta;
                var csp = window.pageYOffset;
                window.scrollTo(0, csp - wd)
            })
        };

    function trackSocialMediaAnalytics(event, socialAction) {
        var $link;
        var formAction = "social_share";
        var socialMediaClass;
        if (typeof event === "string") socialMediaClass = event.replace("native-", "");
        else {
            $link = $(event.currentTarget);
            socialMediaClass = $link.attr("class");
            if (socialMediaClass === "social-card__share-link") socialMediaClass = $link.find(".social-card__icon").attr("title").toLowerCase();
            else {
                socialMediaClass = socialMediaClass.replace(/(social\-media__link)*(tracking\-progression)*(hidden[a-z\-]*)*/gi, "").trim();
                socialMediaClass = socialMediaClass.replace(/(at-share-btn )*(at-svc-)/gi, "");
                socialMediaClass = socialMediaClass.replace(/(_share)/gi, "");
                socialMediaClass = socialMediaClass.replace(/(google_plusone)/gi, "google-plus")
            }
        }
        if (socialAction.toLowerCase().indexOf("follow") > 0) formAction = "social_follow";
        try {
            window._dtm("setSocialMedia", {
                "socialmedianame": socialMediaClass + socialAction
            });
            window._dtm("track", formAction)
        } catch (error) {
            console.error("[trackSocialMediaAnalytics]", error)
        }
    }
    window.trackSocialMediaAnalytics = trackSocialMediaAnalytics;
    $.fn.addIdsToYouTubeVideos = function() {
        var $iframes = this;
        $iframes.each(function(index, element) {
            var $iframe = $(element);
            var iframeSource = $iframe.attr("src");
            var videoId;
            if ((iframeSource.indexOf("youtube.com") !== -1 || iframeSource.indexOf("youtu.be") !== -1) && typeof $iframe.attr("id") === "undefined") {
                iframeSource = addURLParam(iframeSource, "enablejsapi",
                    "1");
                iframeSource = addURLParam(iframeSource, "rel", "0");
                $iframe.attr("src", iframeSource);
                videoId = iframeSource.replace("//www.youtube.com/v/", "").replace("//www.youtube.com/embed/", "").replace("https:", "").replace("http:", "");
                videoId = videoId.split("?")[0];
                videoId = "video-frame--" + videoId + "-" + index;
                $iframe.attr("id", videoId)
            }
        });
        return $iframes
    };

    function CookiebotCallback_OnDialogDisplay() {
        var userStatus = "Anonymous";
        if ($body.hasClass("logged-in")) userStatus = "Logged In";
        impressionAnalytics("Overlay|Cookiebot|||" +
            userStatus)
    }
    window.CookiebotCallback_OnDialogDisplay = CookiebotCallback_OnDialogDisplay;
    $.fn.detectLoginState = function() {
        var $body = this;
        if (typeof Cookies.get("stc-logged-in") !== "undefined")
            if ($body.get(0).tagName.toLowerCase() === "header") $body.addClass("logged-in");
            else {
                if (!$body.hasClass("clo")) $body.addClass("logged-in").removeClass("not-logged-in")
            }
        else if (!$body.hasClass("clo") && !$body.hasClass("logged-in")) $body.addClass("not-logged-in");
        return $body
    };
    $.fn.detectRegistrationState = function() {
        var $body =
            this;
        if (typeof Cookies.get("stc-sign-up-submitted") !== "undefined") $body.addClass("survey-submitted");
        return $body
    };
    $.fn.enableFancybox = function() {
        var $body = this;
        var $fancybox = $body.find(".fancybox");
        var $fancyboxPlum = $body.find(".fancybox--plum");
        var $fancyboxTeal = $body.find(".fancybox--teal");
        var fancyboxSettings;
        var tealFancyboxSettings;
        var plumFancyboxSettings;
        fancyboxSettings = {
            afterLoad: function afterLoad(current, previous) {
                var $currentLink = $(current.element);
                var $currentWrapContainer = $(current.wrap);
                var analyticsRegionAttribute;
                var linkRegionAttribute = $currentLink.attr("data-s-region-id");
                if (current.href !== null && (current.href.indexOf("youtube.com") !== -1 || current.href.indexOf("youtu.be") !== -1)) videoAnalytics();
                if (typeof linkRegionAttribute !== "undefined") $currentWrapContainer.attr("data-s-region-id", linkRegionAttribute);
                else if (current.type === "inline") {
                    analyticsRegionAttribute = $(current.content).attr("data-s-region-id");
                    if (analyticsRegionAttribute !== "") $(current.wrap).attr("data-s-region-id", analyticsRegionAttribute)
                }
            },
            beforeLoad: function beforeLoad() {
                var padding = this.element.data("fancybox-padding");
                var paddingArray = [];
                if (typeof padding !== "undefined") {
                    if (padding.toString().indexOf(",") === -1) paddingArray = [padding, padding, padding, padding];
                    else paddingArray = padding.split(",");
                    if (paddingArray.length === 2) paddingArray = paddingArray.concat(paddingArray);
                    $.extend(this, {
                        padding: paddingArray
                    })
                }
                $.extend(this, {
                    aspectRatio: this.element.data("fancybox-aspect-ratio"),
                    closeBtn: this.element.data("fancybox-close-button"),
                    closeClick: this.element.data("fancybox-close-click"),
                    height: this.element.data("fancybox-height"),
                    margin: this.element.data(".fancybox-margin"),
                    maxHeight: this.element.data("fancybox-max-height"),
                    maxWidth: this.element.data("fancybox-max-width"),
                    minHeight: this.element.data("fancybox-min-height"),
                    minWidth: this.element.data("fancybox-min-width"),
                    tpl: this.element.data("fancybox-tpl"),
                    type: this.element.data("fancybox-type"),
                    width: this.element.data("fancybox-width"),
                    wrapCSS: this.element.data("fancybox-wrap-css")
                })
            },
            beforeClose: function beforeClose() {
                var iframe =
                    void 0;
                if (this.type === "iframe") {
                    iframe = this.content[0];
                    $(iframe).trigger("fancybox-iframe-closed")
                }
            },
            helpers: {
                title: null
            },
            tpl: {
                closeBtn: '\x3ca title\x3d"Close" class\x3d"fancybox-close" href\x3d"javascript:;" data-s-object-id\x3d"Image|Close|Close the Overlay"\x3e\x3c/a\x3e',
                wrap: '\x3cdiv class\x3d"fancybox-wrap" tabIndex\x3d"-1" data-s-region-id\x3d"Overlay||||"\x3e\x3cdiv class\x3d"fancybox-skin"\x3e\x3cdiv class\x3d"fancybox-outer"\x3e\x3cdiv class\x3d"fancybox-inner"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'
            }
        };
        tealFancyboxSettings = {
            tpl: {
                closeBtn: '\x3ca title\x3d"Close" class\x3d"fancybox-close pop-up__close--teal" href\x3d"javascript:;" data-s-object-id\x3d"Image|Close|Close the Overlay"\x3e\x3c/a\x3e'
            },
            wrapCSS: "pop-up--teal"
        };
        plumFancyboxSettings = {
            tpl: {
                closeBtn: '\x3ca title\x3d"Close" class\x3d"fancybox-close pop-up__close--plum" href\x3d"javascript:;" data-s-object-id\x3d"Image|Close|Close the Overlay"\x3e\x3c/a\x3e'
            },
            wrapCSS: "pop-up--plum"
        };
        tealFancyboxSettings = $.extend({}, fancyboxSettings, tealFancyboxSettings);
        plumFancyboxSettings = $.extend({}, fancyboxSettings, plumFancyboxSettings);
        if ($fancybox.length > 0) {
            $fancybox.modifyYoutubeLinks();
            $fancybox.fancybox(fancyboxSettings)
        }
        if ($fancyboxPlum.length > 0) {
            $fancyboxPlum.modifyYoutubeLinks();
            $fancyboxPlum.fancybox(plumFancyboxSettings)
        }
        if ($fancyboxTeal.length > 0) {
            $fancyboxTeal.modifyYoutubeLinks();
            $fancyboxTeal.fancybox(tealFancyboxSettings)
        }
        window.fancyboxSettings = fancyboxSettings;
        window.tealFancyboxSettings = tealFancyboxSettings;
        window.plumFancyboxSettings = plumFancyboxSettings;
        return $body
    };
    $.fn.enableMasonryBoard = function() {
        var $rectangleContainers = this;
        this.each(function(index, element) {
            var $rectangleContainer = $(element);
            var $section = $rectangleContainer.closest("section");
            $rectangleContainer.append('\x3cdiv class\x3d"rectangle--sizer"\x3e\x3c/div\x3e');
            $rectangleContainer.append('\x3cdiv class\x3d"rectangle__gutter"\x3e\x3c/div\x3e');
            $rectangleContainer.masonry({
                itemSelector: '[class^\x3d"rectangle-"]',
                columnWidth: ".rectangle--sizer",
                gutter: ".rectangle__gutter"
            });
            impressionAnalytics($section.attr("data-s-region-id"))
        });
        return $rectangleContainers
    };
    $.fn.fixBrowserQuirks = function($main, $banner) {
        var $body = this;
        if (isBrowser("ie")) {
            $body.addClass("ie");
            addPictureFill();
            $body.smoothScroll();
            if (!String.prototype.startsWith) String.prototype.startsWith = function(searchString, position) {
                position = position || 0;
                return this.substr(position, searchString.length) === searchString
            }
        }
        if (isBrowser("webkit") && ($banner.length > 0 || $main.length > 0)) $body.replaceWbr($banner, $main);
        return $body
    };

    function handleScrollLink(event) {
        var currentUrl = window.location.href;
        var currentUrlBase = currentUrl.split("#")[0];
        var link = $(event.currentTarget).attr("href");
        var linkArray = link.split("#");
        var linkBase = linkArray[0];
        var linkHash = linkArray[1];
        if (currentUrlBase === linkBase || link.indexOf("#") === 0) scrollTo("#" + linkHash);
        return "#" + linkHash
    }
    $.fn.imagesToSvg = function() {
        var $images = this;
        $images.each(oneImageToSvg);
        return $images
    };

    function oneImageToSvg(index, element) {
        var $img = $(element);
        var imgURL = $img.attr("src");
        if (typeof imgURL === "undefined") imgURL = $img.css("background-image").replace('url("',
            "").replace('")', "").replace("url(", "").replace(")", "").trim();
        imgURL = imgURL.replace("https://", "//").replace("http://", "//");
        $.get(imgURL, function(data) {
            replaceImageWithSVG(data, $img)
        }, "xml")
    }

    function replaceImageWithSVG(data, $img) {
        var $svg = $(data).find("svg");
        var imgID = $img.attr("id");
        var imgClass = $img.attr("class");
        var svgClasses = $svg.attr("class");
        if (typeof imgID !== "undefined") $svg = $svg.attr("id", imgID);
        if (typeof svgClasses === "undefined") svgClasses = "";
        if (typeof imgClass !== "undefined") svgClasses +=
            " " + imgClass;
        else if ($img.prop("tagName").toLowerCase() === "hr") svgClasses += " hr";
        svgClasses += " svg--replaced";
        $svg = $svg.attr("class", svgClasses.trim());
        $svg = $svg.removeAttr("xmlns:a");
        $img.replaceWith($svg)
    }
    $.fn.logOut = function() {
        var $logoutLink = this;
        $logoutLink.on("click", function(e) {
            Cookies.remove("stc-member", {
                path: "/",
                domain: window.cookieDomain
            });
            Cookies.remove("stc-logged-in", {
                path: "/",
                domain: window.cookieDomain
            });
            Cookies.remove("stc-basket", {
                path: "/",
                domain: window.cookieDomain
            });
            $body.removeClass("logged-in").addClass("not-logged-in")
        })
    };
    $.fn.mainMenu = function($header) {
        var $container = this;
        var $elementsCloseMenus = $header;
        var $menus;
        var $menuButton = $container.find("#nav__button--menu");
        var $mobileMenuContainer;
        var $mobileMenuContentContainer;
        var $mobileSearchContainer;
        var $searchButton = $container.find("#nav__button--search");
        var menuSources;
        if ($menuButton.length > 0) {
            $mobileMenuContainer = $menuButton.getButtonTarget();
            $mobileMenuContentContainer = $menuButton.getButtonTargetContainer($mobileMenuContainer);
            menuSources = $menuButton.getButtonSources();
            $menus = getMenus(menuSources);
            $menuButton.moveSources($mobileMenuContentContainer, menuSources)
        }
        if ($searchButton.length > 0) $mobileSearchContainer = $searchButton.getButtonTarget();
        if ($menuButton.length > 0) $menuButton.on("click", function(event) {
            $body.toggleClass("js-menu--open");
            $body.removeClass("js-header__search--open");
            $searchButton.removeClass("js-nav__button--open");
            $mobileSearchContainer.removeClass("js-header__search--open");
            $menuButton.toggleClass("js-nav__button--open");
            $mobileMenuContainer.toggleClass("js-menu--open");
            $menus.closeOpenItems()
        });
        if ($searchButton.length > 0) $searchButton.on("click", function(event) {
            $body.toggleClass("js-header__search--open");
            $body.removeClass("js-menu--open");
            $menuButton.removeClass("js-nav__button--open");
            $mobileMenuContainer.removeClass("js-menu--open");
            $searchButton.toggleClass("js-nav__button--open");
            $mobileSearchContainer.toggleClass("js-header__search--open");
            $menus.closeOpenItems()
        });
        $elementsCloseMenus = $elementsCloseMenus.add($container.find(".nav__container"));
        $elementsCloseMenus.on("click",
            function(event) {
                hideSources(event, $menuButton, $searchButton)
            });
        if ($menus.length > 0) $menus.addToggleLinkToParent($menuButton)
    };

    function maintainSession() {
        var $footerContainer = $body.find(".footer__irs");
        var $sessionImage = $footerContainer.find(".image--session");
        var count = Cookies.get("stc-session-count");
        var imgSrc = "PixelServer";
        imgSrc = env("lom.securePath") + imgSrc;
        if ($sessionImage.length === 0) $sessionImage = $('\x3cimg alt\x3d"" width\x3d"0" height\x3d"0" /\x3e').addClass("image--session");
        if (typeof count !==
            "undefined" || count === null) Cookies.set("stc-session-count", 0, {
            path: "/",
            domain: cookieDomain
        });
        else Cookies.set("stc-session-count", parseInt(count, 10) + 1, {
            path: "/",
            domain: cookieDomain
        });
        $sessionImage.remove();
        $sessionImage.prop("src", "");
        $sessionImage.prop("src", imgSrc + "?t\x3d" + count);
        $footerContainer.append($sessionImage);
        setTimeout(maintainSession, 14 * 60 * 1E3)
    }
    $.fn.resizeIframes = function() {
        this.each(function() {
            var $iframe = $(this);
            var height;
            var newHeight;
            var parentWidth;
            var width;
            if (!$iframe.attr("aspectRatio")) {
                height =
                    $iframe.attr("height") || $iframe.height();
                width = $iframe.attr("width") || $iframe.width();
                $iframe.data("aspectRatio", height / width).removeAttr("height").removeAttr("width")
            }
            parentWidth = $iframe.parent().width();
            newHeight = parentWidth * $iframe.data("aspectRatio");
            if (parentWidth !== width) {
                $iframe.attr("width", parentWidth);
                $iframe.attr("height", newHeight)
            }
        });
        return this
    };

    function rewriteBase() {
        var $base;
        var $scripts;
        var $stylesheets;
        var currentBase;
        var newBase;
        $base = $("head \x3e base");
        currentBase = $base.prop("href");
        if (window.location.href.indexOf("PageNavigator") !== -1) {
            newBase = currentBase.replace("PageServer?pagename\x3d%2F", "PageNavigator/") + ".html";
            $base.prop("href", newBase);
            if ($body.hasClass("apple-pay")) {
                $scripts = $body.find(".apple-pay__form script");
                $stylesheets = $body.find(".apple-pay__form link[rel\x3dstylesheet]");
                if ($stylesheets.length > 0) $stylesheets.each(rewriteStylesheetLinks);
                if ($scripts.length > 0) $scripts.each(rewriteScriptLinks)
            }
        }
    }

    function rewriteStylesheetLinks(index, element) {
        var $link = $(element);
        var newHref = $link.attr("href").replace("../", "//" + window.location.hostname + "/");
        $link.attr("href", newHref)
    }

    function rewriteScriptLinks(index, element) {
        var $script = $(element);
        var newSrc;
        if (typeof $script.attr("src") !== "undefined") {
            newSrc = $script.attr("src").replace("../", "//" + window.location.hostname + "/");
            $script.attr("src", newSrc)
        }
    }
    $.fn.secondaryMenu = function($navPrimary) {
        var $navPrimaryButtons = $navPrimary.find(".nav__button");
        var $navSecondary = this;
        var $navSecondaryButton = $navSecondary.find(".nav__button");
        var $secondaryMenu = $navSecondary.find($($navSecondaryButton.attr("data-source")));
        $navSecondaryButton.on("click", function(event) {
            $navSecondary.toggleClass("js-nav--open")
        });
        $navPrimaryButtons.add($secondaryMenu).on("click", function(event) {
            $navSecondary.removeClass("js-nav--open")
        })
    };
    $.fn.signUp = function(signUpFormsSelector) {
        var $forms = this;
        this.each(function() {
            var $emailInput;
            var $myForm = $(this);
            var $phoneInput = $myForm.find('input[type\x3d"tel"]');
            var $signUpColumn = $myForm.closest(".column");
            var $signUpSection =
                $myForm.closest(".section--sign-up");
            if ($signUpSection.length > 0 && $signUpSection.is(":visible")) impressionAnalytics($signUpSection.attr("data-s-region-id"));
            else if ($signUpColumn.length > 0 && $myForm.is(":visible")) {
                if (typeof $signUpColumn.attr("data-s-region-id") === "undefined") $signUpColumn = $signUpColumn.parents(".column");
                impressionAnalytics($signUpColumn.attr("data-s-region-id"))
            }
            $emailInput = $myForm.find("#cons_email");
            if ($phoneInput.length > 0)
                if ($phoneInput.mask("(000) 000-0000"));
            if ($emailInput.length >
                0) {
                $emailInput.addClass("text--lowercase");
                $emailInput.inputToLowerCase()
            }
            $myForm.setMarketingSourceCodes();
            setAnalyticsForm($myForm);
            formAbandonmentAnalytics($myForm)
        });
        window.enableFormValidation(signUpFormsSelector, "html5", signUpSubmitHandler);
        return $forms
    };
    $.fn.socialFollowAnalytics = function() {
        var $container = this;
        var $socialLinks = $container.find(".social-media__link");
        if ($socialLinks.length > 0) $socialLinks.on("click", function(event) {
            trackSocialMediaAnalytics(event, ":follow")
        })
    };
    $.fn.socialShareAnalytics =
        function() {
            var $main = this;
            var $socialCardLinks = $main.find(".social-card__share-link");
            var $socialLinks = $main.find(".social-media__link");
            var $addThisLinks = $main.find(".at-share-btn");
            if ($socialCardLinks.length > 0) $socialCardLinks.on("click", function(event) {
                trackSocialMediaAnalytics(event, ":social-card-share")
            });
            if ($socialLinks.length > 0) $socialLinks.on("click", function(event) {
                trackSocialMediaAnalytics(event, ":share")
            });
            if ($addThisLinks.length > 0) $addThisLinks.on("click", function(event) {
                trackSocialMediaAnalytics(event,
                    ":share")
            })
        };
    $.fn.tab = function() {
        var $links;
        var $tab;
        var $tabContainer = this;
        var $tabContents = $tabContainer.find(".tab__contents");
        var $tabNav = $tabContainer.find(".tab__nav");
        var $sectionPictures;
        $links = $tabNav.find("a");
        $tab = $tabContents.find(".tab");
        $tab.not(":first-child").addClass("js-hidden");
        $tab.filter(":first-child").addClass("js-active");
        $tabContainer.find(".tab__nav \x3e .tab__item:first-child").addClass("js-active");
        if ($tabContainer.hasClass("tab__container--bg")) {
            $sectionPictures = $tabContainer.closest("section").find(".section__picture");
            $sectionPictures.not(":first-child").addClass("js-hidden")
        }
        $tabContainer.setTabContainerHeight($tab, $tabNav, $tabContents);
        $(window).smartEvent("resize", function() {
            $tabContainer.setTabContainerHeight($tab, $tabNav, $tabContents)
        });
        $links.on("click", function(e) {
            var $currentLink = $(this);
            var currentTarget = $currentLink.attr("href");
            var currentId = currentTarget.replace("#", "");
            var targetId = this.hash.replace("#", "");
            var targetTab = $("#" + targetId);
            e.preventDefault();
            $tab.not(targetTab).addClass("js-hidden").removeClass("js-active");
            $tab.filter(targetTab).removeClass("js-hidden").addClass("js-active");
            $links.not($currentLink).closest(".tab__item").removeClass("js-active");
            $currentLink.closest(".tab__item").addClass("js-active");
            if (typeof $sectionPictures !== "undefined" && $sectionPictures.length > 0) {
                $sectionPictures.addClass("js-hidden");
                $sectionPictures.filter("#section__picture--" + targetId).removeClass("js-hidden")
            }
        });
        return $tabContainer
    };
    $.fn.updateBasket = function(basketContent) {
        var $basketItem = this;
        if (typeof basketContent !==
            "undefined" && basketContent !== 0) $basketItem.showBasketCount(basketContent);
        else $basketItem.hideBasketCount();
        return $basketItem
    };
    var $body;
    var $menuBasketItem = window.$menuBasketItem;
    window.cookieDomain = "savethechildren.org";
    $(document).ready(function() {
        var $banner;
        var $document = $(this);
        var $header;
        var $hr;
        var $iframes;
        var $logoutLink;
        var $main;
        var $nav;
        var $navSecondary;
        var $signUpForms;
        var $svgImages;
        var $tabContainer;
        var $radioCheckbox;
        var $rectangleContainer;
        var signUpFormsSelector = ".form--sign-up, .form--sign-up2, .form--interstitial-sign-up";
        var $redbarApiUrl;
        $body = $("body");
        $banner = $body.find(".banner");
        $main = $body.find("main");
        $header = $body.find("header");
        $hr = $main.find("hr").not(".mapembed hr");
        $iframes = $main.find("iframe:not(.iframe--crypto):not(.iframe--daf)");
        $logoutLink = $header.find(".menu__link--logout");
        $nav = $header.find("#nav");
        $navSecondary = $main.find(".nav--secondary, .nav--teamraiser");
        $menuBasketItem = $header.find(".menu__item--basket");
        $signUpForms = $body.find(signUpFormsSelector);
        $svgImages = $body.find("img.icon, img.footer__logo-image");
        $radioCheckbox = $body.find('input[type\x3d"checkbox"], input[type\x3d"radio"]');
        $rectangleContainer = $body.find(".rectangle__container, .rectangle__container--narrow");
        $tabContainer = $body.find('div[class*\x3d"tab__container"]');
        $redbarApiUrl = $("#redbarApiUrl").val();
        window.$menuBasketItem = $menuBasketItem;
        if ($nav.length > 0) $nav.mainMenu($header);
        if ($navSecondary.length > 0) $navSecondary.secondaryMenu($nav);
        if ($body.hasClass("pagebuilder")) rewriteBase();
        if ($logoutLink.length > 0) $logoutLink.logOut();
        $body.detectRegistrationState();
        if ($signUpForms.length > 0) $signUpForms.signUp(signUpFormsSelector);
        var source = Cookies.get("stc-analytics-source");
        var subSource = Cookies.get("stc-analytics-sub_source");
        $(".formcontainer__form").each(function() {
            var $form = $(this);
            setAnalyticsForm($form);
            if (source) {
                $form.find('input[name\x3d"source"]').val(source);
                $form.find("input[data-cid]").val(source)
            }
            if (subSource) {
                $form.find('input[name\x3d"sub_source"]').val(subSource);
                $form.find("input[data-mcid]").val(subSource)
            }
            formAbandonmentAnalytics($form);
            $form.on("change", "input,select", function(event) {
                var $myForm = $(event.delegateTarget);
                setAnalyticsForm($myForm);
                setFormLastField($(event.currentTarget))
            })
        });
        maintainSession();
        $.ajax({
            "dataType": "jsonp",
            "url": $redbarApiUrl,
            "success": function success(response) {
                var loggedIn = response.loggedIn;
                var cartCnt = response.cartCnt;
                var firstName = response.firstName;
                if ($menuBasketItem.length > 0) $menuBasketItem.updateBasket(cartCnt);
                if (loggedIn == true) {
                    $body.removeClass("not-logged-in");
                    $body.addClass("logged-in")
                }
                if (firstName !=
                    null && document.getElementById("user-greeting-name")) document.getElementById("user-greeting-name").appendChild(document.createTextNode(firstName))
            },
            "fail": function fail(response) {
                console.log(response)
            },
            "error": function error(response) {
                console.log(response)
            }
        });
        $body.fixBrowserQuirks($main, $banner);
        if ($radioCheckbox.length > 0) $radioCheckbox.replaceCheckRadio();
        if ($svgImages.length > 0) $svgImages.imagesToSvg();
        if ($hr.length > 0) $hr.imagesToSvg();
        $body.enableFancybox();
        if ($iframes.length > 0) {
            $iframes.resizeIframes();
            $iframes.addIdsToYouTubeVideos()
        }
        if (isInIframe()) $body.addClass("in-iframe");
        if (String(location).indexOf("stc-adobe-target") > -1) $body.addClass("adobe-target");
        $(window).smartEvent("resize", function() {
            if ($iframes && $iframes.length > 0) $iframes.resizeIframes()
        });
        if ($rectangleContainer.length > 0)
            if ($body.hasClass("store__home")) $document.on("load.page", function(e) {
                $rectangleContainer.enableMasonryBoard()
            });
            else $rectangleContainer.enableMasonryBoard();
        if ($tabContainer.length > 0) $tabContainer.tab();
        $body.on("click",
            ".link--scroll", handleScrollLink);
        $main.socialShareAnalytics();
        $body.find(".footer").socialFollowAnalytics();
        if (typeof window.analyticsFormType !== "undefined") getUserInfoSetAnalytics(window.analyticsFormType);
        if (!$body.hasClass("clo")) window.videoAnalytics();
        $document.trigger("stc-scripts-executed")
    });

    function disableFormAbandonmentAnalytics() {
        try {
            window._dtm("setVar", "preventAbandonmentTracking", true)
        } catch (e) {
            console.error(e)
        }
    }
    window.disableFormAbandonmentAnalytics = disableFormAbandonmentAnalytics;

    function formAbandonmentAnalytics($form) {
        var $results = void 0;
        if ($form.length > 0) {
            $form.on("click", 'a, input[type\x3d"submit"], button', function() {
                disableFormAbandonmentAnalytics()
            });
            if ($form.attr("name") === "findFriendForm") {
                $results = $form.formHasResults();
                if ($results.length > 0) $results.on("click", "a", function() {
                    disableFormAbandonmentAnalytics()
                })
            }
            try {
                window._dtm("watchFormAbandonment")
            } catch (e) {
                console.error(e)
            }
        }
    }
    window.formAbandonmentAnalytics = formAbandonmentAnalytics;
    $.fn.formHasResults = function() {
        var $body =
            void 0;
        var $form = this;
        var $results = void 0;
        $body = $form.closest("body");
        $results = $body.find(".participant-find-search-results");
        if ($results.length > 0) return $results;
        else return false
    };

    function getMarketingSourceCode(sourceKey) {
        var cookieName = "stc-analytics-" + sourceKey;
        var sourceCodeValue = Cookies.get(cookieName);
        return sourceCodeValue
    }
    window.getMarketingSourceCode = getMarketingSourceCode;
    $.fn.getUserJourneyName = function() {
        var $body = this;
        var journeyName = "";
        var pageLocation = window.location.href;
        var teamOption;
        if ($body.hasClass("donation") && !$body.hasClass("donation-thank-you")) journeyName = "Donation:Start";
        else if ($body.hasClass("donation-thank-you")) journeyName = "Donation:Complete";
        else if ($body.hasClass("teamraiser") && $body.hasClass("registration")) {
            journeyName = "TeamRaiser:Registration";
            if ($body.hasClass("teamraiser__tfind")) {
                teamOption = window.getUrlVar(pageLocation, "fr_tm_opt");
                if (teamOption === "new") journeyName = "TeamRaiser:Registration:Start:Create a Team";
                else if (teamOption === "existing") journeyName =
                    "TeamRaiser:Registration:Start:Join a Team"
            } else if ($body.hasClass("teamraiser__ptype"))
                if ($body.find(".progress-bar-step-current .progress-bar-step-number-container").text().trim() === "1") journeyName = "TeamRaiser:Registration:Start:Register Individual/Participation Options";
                else journeyName = "TeamRaiser:Registration:Participation Options";
            else if ($body.hasClass("teamraiser__utype")) journeyName = "TeamRaiser:Registration:Sign in";
            else if ($body.hasClass("teamraiser__reg")) journeyName = "TeamRaiser:Registration:Provide Details";
            else if ($body.hasClass("teamraiser__reganother")) journeyName = "TeamRaiser:Registration:Register Another";
            else if ($body.hasClass("teamraiser__regsummary")) journeyName = "TeamRaiser:Registration:Review";
            else if ($body.hasClass("teamraiser__payment")) journeyName = "TeamRaiser:Registration:Make Payment";
            else if ($body.hasClass("teamraiser__waiver")) journeyName = "TeamRaiser:Registration:Waiver";
            else if ($body.hasClass("teamraiser__rthanks")) journeyName = "TeamRaiser:Registration:Thank You";
            else if ($body.hasClass("teamraiser__pfind")) journeyName =
                "TeamRaiser:Participant/Team Search"
        }
        return journeyName
    };
    $.fn.isApiForm = function() {
        var $form = this;
        var returnValue = false;
        returnValue = $form.hasClass("form--sign-up") || $form.hasClass("form--sign-up2") || $form.hasClass("form--register") || $form.hasClass("form--combo-cart-checkout") || $form.hasClass("formcontainer__form");
        return returnValue
    };

    function isFormWithCustomAnalytics(formName) {
        var isFormWithCustomAnalytics = false;
        if (typeof formName !== "undefined" && (formName.indexOf("signup-form") !== -1 || formName.indexOf("sponsorship-form") !==
                -1 || formName.indexOf("ShoppingCart") !== -1 || formName.indexOf("EditAddress") !== -1 || formName.indexOf("Donate") !== -1 || formName.indexOf("FriendraiserFind") !== -1 || formName.indexOf("F2fRegPartType") !== -1 || formName.indexOf("f2fLoginForm") !== -1 || formName.indexOf("F2fRegContact") !== -1 || formName.indexOf("FriendraiserUserWaiver") !== -1 || formName.indexOf("fr_payment_form") !== -1 || formName.indexOf("RegisterAnother") !== -1)) isFormWithCustomAnalytics = true;
        return isFormWithCustomAnalytics
    }

    function setAnalyticsError() {
        var errorCode =
            arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 422;
        var errorMessage = arguments[1];
        var errorType = arguments[2];
        try {
            window._dtm("setError", {
                errorCode: errorCode,
                description: errorMessage,
                type: errorType
            })
        } catch (e) {
            console.error(e)
        }
    }
    window.setAnalyticsError = setAnalyticsError;

    function setAnalyticsForm($form, lastFieldName, donationFormName, donationFormId, appealName, donorEmployer, howDidYouHear, fundName) {
        var formId = "";
        var formName = "";
        var settings = {};
        var trEventCategory;
        if (typeof $body === "undefined") var $body =
            $("body");
        if (donorEmployer === "Choose an existing company") donorEmployer = "";
        if (typeof donationFormId === "undefined" && typeof $form !== "undefined" && typeof $form.attr("id") !== "undefined") formId = $form.attr("id");
        else if (typeof donationFormId !== "undefined" && donationFormId !== "") formId = donationFormId;
        if (typeof donationFormName !== "undefined" && donationFormName !== "") formName = "donation:" + donationFormName;
        else if (typeof $form !== "undefined" && typeof $form.attr("name") !== "undefined") formName = $form.attr("name");
        if (typeof appealName !==
            "undefined" && appealName !== "") settings.appealname = appealName;
        if (typeof donorEmployer !== "undefined" && donorEmployer !== "") settings.donorcompanyname = donorEmployer;
        settings.name = formName;
        settings.formid = formId;
        if (typeof howDidYouHear !== "undefined" && howDidYouHear !== "") settings.hearaboutus = howDidYouHear;
        if (typeof fundName !== "undefined" && fundName !== "") settings.fundname = fundName;
        if (typeof lastFieldName !== "undefined" && lastFieldName !== "") settings.lastfieldname = lastFieldName;
        if ($body.hasClass("teamraiser")) {
            trEventCategory =
                $body.siblings("head").find('meta[name\x3d"datalayer"]').data("meta-sub-category1");
            settings.fundraisingeventcategory = trEventCategory
        }
        try {
            window._dtm("setForm", settings)
        } catch (e) {
            console.error(e)
        }
        return true
    }
    window.setAnalyticsForm = setAnalyticsForm;

    function setDonationAnalytics(activeDonationAmount, frequency, p2pRegAmount) {
        var p2pEventName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
        var settings = {};
        if (typeof activeDonationAmount === "undefined") activeDonationAmount = 0;
        else if (activeDonationAmount) {
            activeDonationAmount =
                String(activeDonationAmount).replace(/\$*,*/g, "");
            activeDonationAmount = parseFloat(activeDonationAmount)
        }
        if (typeof p2pRegAmount === "undefined" || typeof p2pRegAmount !== "undefined" && p2pRegAmount === "No Fee") p2pRegAmount = 0;
        else if (p2pRegAmount) {
            p2pRegAmount = p2pRegAmount.replace(/\$*,*/g, "");
            p2pRegAmount = parseFloat(p2pRegAmount)
        }
        if (typeof $body === "undefined") $body = $("body");
        settings = {
            donationAmount: activeDonationAmount,
            userjourneyname: $body.getUserJourneyName()
        };
        if (typeof frequency === "undefined" || frequency ===
            "" || !frequency || frequency === "one-time") $.extend(settings, {
            recurringdonationamount: 0,
            recurringdonationfrequency: "one-time",
            singledonationamount: activeDonationAmount
        });
        else $.extend(settings, {
            recurringdonationamount: activeDonationAmount,
            recurringdonationfrequency: frequency,
            singledonationamount: 0
        });
        if (typeof p2pEventName !== "undefined" && p2pEventName !== "") settings.peer2peereventname = p2pEventName;
        if (typeof p2pRegAmount !== "undefined" && p2pRegAmount !== "") settings.peer2peerregistrationamount = p2pRegAmount;
        try {
            window._dtm("setDonation",
                settings);
            return true
        } catch (e) {
            console.error(e);
            return false
        }
    }
    window.setDonationAnalytics = setDonationAnalytics;

    function setDonationFormAnalytics($form) {
        var $howDidYouHearInput;
        var appealName;
        var formType;
        var howDidYouHear;
        var splitFormName;
        $howDidYouHearInput = $form.find("#how_did_you_hear_about_us_input");
        if ($howDidYouHearInput.length > 0) howDidYouHear = $howDidYouHearInput.val();
        if (typeof window.donationPrivateFormName !== "undefined") {
            splitFormName = window.donationPrivateFormName.split("|");
            if (splitFormName.length >
                0) {
                formType = typeof splitFormName[1] !== "undefined" ? splitFormName[1].toLowerCase() : "none";
                appealName = typeof splitFormName[2] !== "undefined" ? splitFormName[2] : "none"
            }
        }
        setAnalyticsForm($form, undefined, window.donationPrivateFormName, window.donationFormId, appealName, window.donorEmployer, howDidYouHear, formType)
    }

    function setDonationPledge(oldAmount, newAmount, pledgeType, paymentType) {
        try {
            window._dtm("setDonationPledge", oldAmount, newAmount, pledgeType, paymentType)
        } catch (error) {
            console.log("[setDonationPledge]",
                error)
        }
    }
    window.setDonationPledge = setDonationPledge;

    function setFormAbandonment(formId, formName, lastFieldName) {
        setFormAnalyticsData(formId, formName, lastFieldName);
        try {
            window._dtm("setFormAbandonment")
        } catch (e) {
            console.error(e)
        }
    }
    window.setFormAbandonment = setFormAbandonment;

    function setFormAnalyticsData(formId, formName, lastFieldName) {
        var formId = "";
        var formName = "";
        var settings = {};
        if (typeof formId !== "undefined" && formId !== "") settings.formid = formId;
        if (typeof formName !== "undefined" && formName !== "") settings.name =
            formName;
        if (typeof lastFieldName !== "undefined" && lastFieldName !== "") settings.lastfieldname = lastFieldName;
        try {
            window._dtm("setForm", settings)
        } catch (e) {
            console.error(e)
        }
        return true
    }
    window.setFormAnalyticsData = setFormAnalyticsData;

    function setFormError(formId, formName, lastFieldName, errorMessage, errorType) {
        var errorCode = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 422;
        setFormAnalyticsData(formId, formName, lastFieldName);
        try {
            window._dtm("setError", {
                errorCode: errorCode,
                description: errorMessage,
                type: errorType
            })
        } catch (e) {
            console.error(e)
        }
    }
    window.setFormError = setFormError;

    function setFormLastField($input) {
        var inputId = "";
        var inputValue = void 0;
        var settings = {};
        if (typeof $input === "string") inputId = $input;
        else inputId = $input.attr("id");
        if (typeof inputId === "undefined" && $input instanceof $) inputId = $input.attr("name");
        if (inputId === "fr_co_list" && $input instanceof $) {
            inputValue = $input.find("option:selected").text();
            settings.donorcompanyname = inputValue
        }
        if (inputId === "how-did-you-hear-select" && $input instanceof $) {
            inputValue = $input.find("option:selected").text();
            settings.hearaboutus = inputValue
        }
        settings.lastfieldname = inputId;
        try {
            window._dtm("updateForm", settings)
        } catch (e) {
            console.error(e)
        }
        return inputId
    }
    window.setFormLastField = setFormLastField;

    function setFormSubmission(formId, formName, lastFieldName) {
        var formAction = "form_submit";
        setFormAnalyticsData(formId, formName, lastFieldName);
        try {
            if (triggerSubmission) {
                window._dtm("track", formAction);
                waitMilliseconds(1E3)
            }
        } catch (e) {
            console.error(e)
        }
    }
    window.setFormSubmission =
        setFormSubmission;

    function setFormUploadSuccess(fileType, fileLocation) {
        try {
            window._dtm("setUploadSuccess", fileType + "|" + fileLocation)
        } catch (e) {
            console.error(e)
        }
    }
    window.setFormUploadSuccess = setFormUploadSuccess;
    $.fn.setMarketingSourceCode = function(sourceKey) {
        var $input;
        var $form = this;
        var sourceCodeValue = getMarketingSourceCode(sourceKey);
        var inputName = sourceKey;
        if (!$form.isApiForm()) {
            inputName = "s_src";
            if (sourceKey === "sub_source") inputName = "s_subsrc"
        }
        $input = $form.find('input[name\x3d"' + inputName + '"]');
        if (typeof sourceCodeValue !== "undefined" && $input.length === 0) {
            $input = $('\x3cinput type\x3d"hidden" id\x3d"' + inputName + '" name\x3d"' + inputName + '" value\x3d"' + sourceCodeValue + '"/\x3e');
            $form.append($input)
        }
        return $form
    };
    $.fn.setMarketingSourceCodes = function() {
        var $form = this;
        $form.setMarketingSourceCode("source").setMarketingSourceCode("sub_source");
        $(document).on("analytics.subsource.ready", function(event) {
            $form.setMarketingSourceCode("sub_source")
        });
        return $form
    };

    function submissionSuccessAnalytics($form) {
        var $body;
        var formAction = "form_submit";
        var triggerSubmission = true;
        if ($form.get(0).tagName.toLowerCase() === "form") $body = $form.closest("body");
        else $body = $form;
        if ($body.hasClass("store__ecard") || $body.hasClass("ecard") && $body.hasClass("ecard--1061") && !$body.hasClass("ecard__thank-you")) formAction = "ecommerce_ecard";
        else if ($form.attr("name") === "ConfigureProduct") {
            if ($form.find("#update_item").length === 0) triggerSubmission = false
        } else if ($form.hasClass("form--print-card")) formAction = "ecommerce_printablecard";
        else if ($form.attr("name") ===
            "survey_1421") formAction = "ecommerce_physicalcard";
        else if (typeof $form.attr("class") !== "undefined" && $form.attr("class").indexOf("form--sign-up") !== -1) {
            setAnalyticsForm($form);
            formAction = "email_submit"
        } else if ($body.hasClass("teamraiser") && !$body.hasClass("teamraiser__rthanks") && !$body.hasClass("pc2")) formAction = "p2p_submit";
        else if ($body.hasClass("store__shipping") || $body.hasClass("store__billing") || $body.hasClass("store__cart") || $body.hasClass("store__confirmation") || $body.hasClass("store__shipping--sponsorship") ||
            $body.hasClass("store__billing--sponsorship") || $form.hasClass("form--login") || $form.hasClass("form--register") || $body.hasClass("donation") && !$body.hasClass("donation-thank-you")) triggerSubmission = false;
        $form.trigger("validation-success");
        try {
            if (triggerSubmission) window._dtm("track", formAction)
        } catch (e) {
            console.error(e)
        }
    }
    window.submissionSuccessAnalytics = submissionSuccessAnalytics;

    function validationErrorAnalytics($form) {
        var $body = $form.closest("body");
        var $error;
        var $firstInputWithError = $form.find(".form__input--error").eq(0);
        var errorMessage;
        var errorType = "validation error";
        var inputType = $firstInputWithError.attr("type");
        var inputName = $firstInputWithError.attr("name");
        if (typeof inputType !== "undefined" && (inputType === "radio" || inputType === "checkbox"))
            if (typeof inputName !== "undefined" && inputName === "level_standardexpanded") $error = $firstInputWithError.closest(".donation-levels").find(".form__error");
            else $error = $firstInputWithError.parent().siblings(".form__error");
        else $error = $firstInputWithError.siblings(".form__error");
        errorMessage = $error.text().replace(/(\s)+/g, " ");
        if (typeof inputName !== "undefined") errorMessage = inputName + ": " + errorMessage;
        else errorMessage = $firstInputWithError.attr("id") + ": " + errorMessage;
        if ($body.hasClass("login-confirmation"))
            if ($form.attr("id") === "janrainLoginForm") errorType = "login form error";
        if ($form && typeof $form.attr("id") !== "undefined" && ($form.attr("id") === "InputForm" || $form.attr("id").indexOf("survey") > -1)) scrollTo($firstInputWithError.closest("tr"));
        else if ($body.hasClass("donation") &&
            typeof inputName !== "undefined" && inputName === "level_standardexpanded") scrollTo($firstInputWithError.closest(".donation-levels"));
        else if ($body.hasClass("teamraiser__ptype") && typeof inputName !== "undefined" && inputName.indexOf("donation_level") > -1) scrollTo($firstInputWithError.closest(".donation-level-container"));
        else scrollTo($firstInputWithError.closest("div"));
        setAnalyticsError("422", errorMessage, errorType)
    }
    window.validationErrorAnalytics = validationErrorAnalytics;
    $.fn.applyAttrMask = function(mask,
        propType, pattern) {
        var $input = this;
        $input.attr("type", propType);
        if (mask) $input.attr("data-mask", mask);
        else $input.removeAttr("data-mask").unmask();
        if (pattern) $input.attr("pattern", pattern).attr("data-validation-regexp", pattern);
        else $input.removeAttr("pattern").removeAttr("data-validation-regexp");
        if ($.applyDataMask());
        if ($input.val() !== "") $input.trigger("blur")
    };

    function creditCardMasking($ccInput, $cvvInput, $creditCardImages) {
        var $imageAmex = $creditCardImages.filter('img[alt\x3d"American Express"]');
        var $imageDiscover = $creditCardImages.filter('img[alt\x3d"Discover"]');
        var $imageMastercard = $creditCardImages.filter('img[alt\x3d"MasterCard"]');
        var $imageVisa = $creditCardImages.filter('img[alt\x3d"Visa"]');
        var ccPattern = "^[0-9]{4} *[0-9]{6} *[0-9]{5}|[0-9]{4} *[0-9]{4} *[0-9]{4} *[0-9]{4}|[0-9]{4} *[0-9]{4} *[0-9]{4} *[0-9]{1}$";
        if (typeof $().payment === "function") {
            $ccInput.payment("formatCardNumber").attr("pattern", ccPattern);
            $cvvInput.payment("formatCardCVC").attr("pattern", "^[0-9]{3,4}$")
        }
        $cvvInput.attr("data-mask",
            "0000");
        $ccInput.on("keyup", function() {
            var $input = $(this);
            $creditCardImages.addClass("js-card--inactive");
            if ($input.hasClass("identified"))
                if ($input.hasClass("amex")) $imageAmex.removeClass("js-card--inactive").addClass("js-card--active");
                else if ($input.hasClass("discover")) $imageDiscover.removeClass("js-card--inactive").addClass("js-card--active");
            else if ($input.hasClass("mastercard")) $imageMastercard.removeClass("js-card--inactive").addClass("js-card--active");
            else if ($input.hasClass("visa")) $imageVisa.removeClass("js-card--inactive").addClass("js-card--active");
            else;
        })
    }
    window.creditCardMasking = creditCardMasking;
    var labelDenoteRequired = function labelDenoteRequired(label) {
        var required = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        if (label && label.length > 0) {
            var txt = label.html().replace('\x3cspan class\x3d"form__required"\x3e*\x3c/span\x3e', "");
            txt = required ? '\x3cspan class\x3d"form__required"\x3e*\x3c/span\x3e' + txt : txt;
            label.html(txt)
        }
    };
    var triggerChangeEvt = function triggerChangeEvt($el) {
        if ($el.length === 0) return false;
        var el = $el.get(0);
        var changeEvt =
            document.createEvent("Events");
        var inputEvt = document.createEvent("Events");
        changeEvt.initEvent("change", true, false);
        inputEvt.initEvent("input", true, false);
        el.dispatchEvent(changeEvt);
        el.dispatchEvent(inputEvt)
    };
    $.fn.updateInternationalState = function(stateContainerShow, $countrySelect) {
        var $container = this;
        var $input = this;
        if ($input.length === 0) return $input;
        if ($input.get(0).tagName.toLowerCase() !== "input") $input = $input.find("input");
        if (stateContainerShow) {
            $input.attr("data-validation-optional", "true");
            $input.val("").trigger("blur");
            $container.addClass("js-hidden")
        } else {
            $input.removeAttr("data-validation-optional");
            $container.removeClass("js-hidden")
        }
        triggerChangeEvt($input);
        return $container
    };

    function zipPhoneMasking($countrySelect, $stateSelect, $phone, $zip, $stateContainer, $internationalStateInput, $zipLabel, zipAlwaysRequiredFlag, zipDefaultZeros) {
        var country = new Country($countrySelect.val());
        var userLoggedIn = $body.hasClass("logged-in");
        var stateSelectVal;
        var stateSelectCachedVal;
        var stateContainerShow;
        var stateInitialValueKeyname = "initial-value";
        var stateFirstRun = false;
        var phoneMask;
        var phonePattern;
        var phonePlaceholder;
        var phonePropType;
        var zipPattern;
        var zipMask;
        var zipPropType;
        if ($stateSelect.attr(stateInitialValueKeyname) === "" || typeof $stateSelect.attr(stateInitialValueKeyname) === "undefined") {
            stateFirstRun = true;
            $stateSelect.attr(stateInitialValueKeyname, $stateSelect.val())
        }
        stateSelectCachedVal = $stateSelect.attr(stateInitialValueKeyname);
        if (country.isCanada()) {
            stateSelectVal = userLoggedIn || stateFirstRun ?
                stateSelectCachedVal : "AB";
            stateContainerShow = true;
            phoneMask = "(000) 000-0000";
            phonePattern = "^\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}$";
            phonePlaceholder = "(555) 555-5555";
            phonePropType = "tel";
            zipMask = false;
            zipPattern = false;
            zipPropType = "text";
            labelDenoteRequired($zipLabel)
        } else if (country.isInternational()) {
            stateSelectVal = "None";
            stateContainerShow = false;
            phoneMask = false;
            phonePattern = false;
            phonePlaceholder = "";
            phonePropType = "number";
            zipMask = false;
            zipPattern = false;
            zipPropType = "text";
            labelDenoteRequired($zipLabel,
                zipAlwaysRequiredFlag === true)
        } else {
            if ((userLoggedIn || stateFirstRun) && $stateSelect.attr(stateInitialValueKeyname) !== "None" && country.isUSA()) stateSelectVal = $stateSelect.attr(stateInitialValueKeyname);
            else if ($stateSelect.val() !== "" && $stateSelect.val() !== "None" && (stateSelectCachedVal === "" || stateSelectCachedVal === "None")) stateSelectVal = $stateSelect.val();
            else stateSelectVal = "";
            stateContainerShow = true;
            phoneMask = "(000) 000-0000";
            phonePattern = "^\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}$";
            phonePlaceholder = "(555) 555-5555";
            phonePropType = "tel";
            zipMask = "00000-0000";
            zipPattern = "^\\d{5}(?:[-]\\d{4})?$";
            zipPropType = "tel";
            labelDenoteRequired($zipLabel)
        }
        if (typeof $stateSelect !== "undefined") {
            $stateSelect.val(stateSelectVal);
            triggerChangeEvt($stateSelect)
        }
        if (typeof $phone !== "undefined") {
            $phone.attr("placeholder", phonePlaceholder);
            $phone.applyAttrMask(phoneMask, phonePropType, phonePattern)
        }
        if (typeof $zip !== "undefined") {
            $zip.attr("required", "required");
            if (zipAlwaysRequiredFlag !== true)
                if (stateContainerShow !== true) $zip.attr("data-validation-optional",
                    true);
                else $zip.removeAttr("data-validation-optional");
            $zip.applyAttrMask(zipMask, zipPropType, zipPattern);
            var zipParentForm = $zip.closest("form");
            var zipFormSubmitEventName = "submit.zipDefaultZeros";
            if (zipParentForm.length > 0) {
                zipParentForm.unbind(zipFormSubmitEventName);
                if (zipDefaultZeros === true && country.isInternational()) zipParentForm.on(zipFormSubmitEventName, function() {
                    if ($zip.val().trim() === "") $zip.val("00000")
                })
            }
        }
        if (typeof $stateContainer !== "undefined")
            if (stateContainerShow) $stateContainer.show();
            else $stateContainer.hide();
        if (typeof $internationalStateInput !== "undefined") $internationalStateInput.updateInternationalState(stateContainerShow, $countrySelect)
    }
    window.zipPhoneMasking = zipPhoneMasking;
    $.formUtils.addValidator({
        errorMessageKey: "badCcExpirationMonth",
        name: "cc_exp_month",
        validatorFunction: function validatorFunction(value, $el, config, language, $form) {
            var $year = $(':input[name\x3d"' + $el.data("validation-expiration-year") + '"]');
            $el.attr("data-validation-error-msg", language.badCcExpirationMonth);
            return monthYearValidationHandler($el, $year, "month")
        }
    });
    $.formUtils.addValidator({
        errorMessageKey: "badCcExpirationYear",
        name: "cc_exp_year",
        validatorFunction: function validatorFunction(value, $el, config, language, $form) {
            var $month = $(':input[name\x3d"' + $el.data("validation-expiration-month") + '"]');
            return monthYearValidationHandler($month, $el, "year")
        }
    });
    $.formUtils.addValidator({
        errorMessageKey: "badBirthDay",
        name: "birthday_day",
        validatorFunction: function validatorFunction(value, $day, config, language, $form) {
            var $month =
                $(':input[name\x3d"' + $day.data("validation-birthday-month") + '"]');
            var $year = $(':input[name\x3d"' + $day.data("validation-birthday-year") + '"]');
            return $day.isBirthdayValid($day, $month, $year)
        }
    });
    $.formUtils.addValidator({
        errorMessageKey: "badBirthMonth",
        name: "birthday_month",
        validatorFunction: function validatorFunction(value, $month, config, language, $form) {
            var $day = $(':input[name\x3d"' + $month.data("validation-birthday-day") + '"]');
            var $year = $(':input[name\x3d"' + $month.data("validation-birthday-year") + '"]');
            return $month.isBirthdayValid($day, $month, $year)
        }
    });
    $.formUtils.addValidator({
        errorMessageKey: "badBirthYear",
        name: "birthday_year",
        validatorFunction: function validatorFunction(value, $year, config, language, $form) {
            var $day = $(':input[name\x3d"' + $year.data("validation-birthday-day") + '"]');
            var $month = $(':input[name\x3d"' + $year.data("validation-birthday-month") + '"]');
            return $year.isBirthdayValid($day, $month, $year)
        }
    });
    $.formUtils.addValidator({
        errorMessageKey: "donationPremiumNotSelected",
        name: "donation_premium",
        validatorFunction: function validatorFunction(value, $select, config, language, $form) {
            return value !== "-1"
        }
    });
    var ccMonthYearValid = function ccMonthYearValid(month, year) {
        var now = new Date;
        var inFuture = new Date(now);
        month = Math.max(Number(month), 1);
        year = Math.max(Number(year), 1970);
        inFuture.setMonth(month - 1);
        inFuture.setFullYear(year);
        return now <= inFuture
    };

    function disableFormValidation(event) {
        var $allInputs;
        var $form;
        var allInputs = [];
        if (event.currentTarget.tagName.toLowerCase() === "button" || event.currentTarget.tagName.toLowerCase() ===
            "input") $form = $(event.currentTarget).closest("form");
        else $form = $(event.currentTarget);
        $allInputs = $form.find("input, select, textarea");
        $allInputs.each(function(index, element) {
            allInputs.push($(element).prop("name"))
        });
        $.validate({
            ignore: allInputs
        })
    }
    window.disableFormValidation = disableFormValidation;

    function enableFormValidation(formSelector, modules, onSuccessCallback, onErrorCallback, onValidateCallback) {
        var _this = this;
        var $form;
        var formName;
        var settings;
        var submitButtons;
        var onError = function onError($form) {
            if (typeof submitButtons !==
                "undefined") submitButtons.buttonProcessing("remove");
            if (typeof onErrorCallback !== "undefined") onErrorCallback.call(_this, $form);
            return validationErrorAnalytics.call(_this, $form)
        };
        $(window).on("popstate", function() {
            if (typeof submitButtons !== "undefined") submitButtons.buttonProcessing("remove")
        });
        var onValidate = function onValidate($form) {
            submitButtons = $form.find(".js-auto-button-processing").buttonProcessing();
            if (typeof onValidateCallback === "function") return onValidateCallback.call(_this);
            return true
        };
        if (typeof modules === "undefined") modules = "html5";
        settings = {
            borderColorOnError: "",
            errorElementClass: "form__input--error",
            errorMessageClass: "form__error",
            errorMessagePosition: "inline",
            form: formSelector,
            inlineErrorMessageCallback: modifyInputErrorMessage,
            language: stcErrorMessages,
            modules: modules,
            onError: onError,
            onSuccess: submissionSuccessAnalytics,
            onValidate: onValidate,
            scrollToTopOnError: false,
            validateHiddenInputs: true
        };
        if (typeof onSuccessCallback !== "undefined") settings["onSuccess"] = function($form) {
            submissionSuccessAnalytics($form);
            return onSuccessCallback.call(this, $form)
        };
        if (typeof $.validate === "function") {
            $form = $(formSelector);
            $form.attr("novalidate", "novalidate");
            $.validate(settings);
            formName = $form.attr("name");
            if ($form.parents("body").hasClass("donation")) setDonationFormAnalytics($form);
            else if (!isFormWithCustomAnalytics(formName)) {
                setAnalyticsForm($form);
                formAbandonmentAnalytics($form);
                $form.setMarketingSourceCodes()
            }
            $form.on("change", "input, select, textarea", function(e) {
                if (!isFormWithCustomAnalytics(formName) || formName.indexOf("signup-form") !==
                    -1) setAnalyticsForm($(e.currentTarget).closest("form"));
                setFormLastField($(e.currentTarget))
            });
            return true
        } else return false
    }
    window.enableFormValidation = enableFormValidation;

    function getParentContainer($parentContainer, inputType) {
        var $newParentContainer = $parentContainer;
        if (typeof inputType !== "undefined" && (inputType === "radio" || inputType === "checkbox")) {
            $newParentContainer = $parentContainer.parent();
            if ($newParentContainer.get(0).tagName.toLowerCase() === "label") $newParentContainer = $newParentContainer.parent()
        }
        if (!$newParentContainer.hasClass("form__column--exp-month") &&
            !$newParentContainer.hasClass("form__column--exp-year") && !$newParentContainer.hasClass("exp-date-month-container") && !$newParentContainer.hasClass("exp-date-year-container") && $newParentContainer.find("label").length === 0) $newParentContainer = $newParentContainer.parent();
        return $newParentContainer
    }
    $.fn.isBirthdayValid = function($day, $month, $year) {
        var $initiator = this;
        var $otherInputs = void 0;
        var day = $day.val();
        var isOtherFieldsValid = true;
        var isValidBday = void 0;
        var month = $month.val();
        var year = $year.val();
        if ($initiator === $day) {
            $otherInputs = $month.add($year);
            isValidBday = isInputValueSetToInteger($day)
        } else if ($initiator === $month) {
            $otherInputs = $day.add($year);
            isValidBday = isInputValueSetToInteger($month)
        } else {
            $otherInputs = $day.add($month);
            isValidBday = isInputValueSetToInteger($year)
        }
        $otherInputs.each(function(index, element) {
            var $input = $(element);
            isOtherFieldsValid = isOtherFieldsValid && isInputValueSetToInteger($input)
        });
        if (!isValidBday && !isOtherFieldsValid) isValidBday = true;
        else if (isValidBday && isOtherFieldsValid) isValidBday =
            isBirthdayInThePast(day, month, year);
        return isValidBday
    };

    function isInputValueSetToInteger($input) {
        var value = $input.val();
        var isValid = void 0;
        isValid = typeof value !== "undefined" && value !== "" && !isNaN(value);
        return isValid
    }

    function isBirthdayInThePast(day, month, year) {
        var birthday = new Date;
        var now = new Date;
        var isValid = void 0;
        birthday.setDate(day);
        birthday.setMonth(month - 1);
        birthday.setFullYear(year);
        isValid = birthday < now;
        return isValid
    }

    function isVowel(s) {
        return /^[aeiou]$/i.test(s)
    }

    function modifyInputErrorMessage($input,
        errorMessage, config) {
        var $error;
        var $label;
        var $parentContainer = $input.parent();
        var inputName = $input.attr("name");
        var inputType = $input.attr("type");
        if (typeof inputType === "undefined") inputType = $input.get(0).tagName.toLowerCase();
        $parentContainer = getParentContainer($parentContainer, inputType);
        if (errorMessage) {
            $label = $parentContainer.find("label");
            $error = $parentContainer.find("." + config.errorMessageClass);
            errorMessage = setErrorMessage(errorMessage, $input, $label);
            if ($error.length === 0) {
                $error = $("\x3cspan\x3e").addClass(config.errorMessageClass).text(errorMessage);
                if (typeof inputType !== "undefined" && (inputType === "radio" || inputType === "checkbox"))
                    if (typeof inputName !== "undefined" && (inputName === "level_standardexpanded" || inputName === "level_foreverexpanded" || inputName === "level_flexibleexpanded")) $parentContainer.closest(".donation-levels").prepend($error);
                    else if (typeof inputName !== "undefined" && inputName.indexOf("donation_level_form_") > -1) $parentContainer.closest(".donation-level-container").prepend($error);
                else $parentContainer.prepend($error);
                else $input.after($error)
            } else {
                $error.text(errorMessage).removeClass("js-hidden");
                $input.after($error)
            }
        } else if (typeof inputName !== "undefined" && (inputName === "level_standardexpanded" || inputName === "level_foreverexpanded" || inputName === "level_flexibleexpanded")) $parentContainer.closest(".donation-levels").children("." + config.errorMessageClass).addClass("js-hidden");
        else if (typeof inputName !== "undefined" && inputName.indexOf("donation_level_form_") > -1) {
            $parentContainer.closest(".donation-level-container").children("." + config.errorMessageClass).addClass("js-hidden");
            if (inputName.indexOf("donation_level_form_input" >
                    -1)) $parentContainer.children("." + config.errorMessageClass).addClass("js-hidden")
        } else $parentContainer.find("." + config.errorMessageClass).addClass("js-hidden");
        return
    }

    function monthYearValidationHandler($month, $year) {
        var initiator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "month";
        var isCcValidatedKey = "is-cc-validated";
        var isDirtyKey = "is-dirty";
        var isValid = void 0;
        var $other = initiator === "month" ? $year : $month;
        var $requester = initiator === "month" ? $month : $year;
        $requester.data(isDirtyKey,
            true).data(isCcValidatedKey, null);
        if ($month.data(isDirtyKey) !== true || $year.data(isDirtyKey) !== true) return true;
        isValid = ccMonthYearValid($month.val(), $year.val());
        $requester.data(isCcValidatedKey, isValid);
        if ($requester.data(isCcValidatedKey) !== $other.data(isCcValidatedKey)) $other.trigger("blur");
        return isValid
    }

    function setErrorMessage(errorMessage, $input, $label) {
        var $form = $input.closest("form");
        var article = "a";
        var fieldName;
        var inputType = $input.attr("type");
        var inputErrorMessage = $input.attr("data-validation-error-msg");
        var newErrorMessage = inputErrorMessage;
        if (typeof inputErrorMessage === "undefined" || inputErrorMessage === "") {
            newErrorMessage = errorMessage;
            if (errorMessage === "This is a required field") newErrorMessage = stcErrorMessages.requiredField;
            else if (errorMessage === "Input values could not be confirmed") newErrorMessage = stcErrorMessages.notConfirmed;
            if (typeof inputType !== "undefined" && (inputType === "radio" || inputType === "checkbox")) newErrorMessage = stcErrorMessages.badNumberOfSelectedOptionsStart + "one" + stcErrorMessages.badNumberOfSelectedOptionsEnd;
            if ($label.length === 0) $label = $form.find('label[for\x3d"' + $input.attr("id") + '"]');
            if ($input.attr("data-validation-confirm")) $label = $form.find('label[for\x3d"' + $input.attr("data-validation-confirm") + '"]');
            fieldName = $label.text().replace("*", "").replace(":", "").trim();
            fieldName = fieldName.replace("Field Is Required", "");
            fieldName = fieldName.replace(/[?.!]$/g, "");
            if (fieldName.startsWith("Your ")) fieldName = fieldName.replace("Your ", "");
            if ($input.attr("name") === "ecard_captcha" || $input.attr("name") === "taf_captcha") newErrorMessage =
                fieldName;
            if (fieldName !== "CVV") fieldName = fieldName.toLowerCase();
            if (fieldName.indexOf("recipients") !== -1 || fieldName.indexOf("catalogs") !== -1) newErrorMessage = newErrorMessage.replace("[article]", "");
            if (fieldName.indexOf("select a card") !== -1) newErrorMessage = newErrorMessage.replace("[fieldName]", "card");
            if ($input.get(0).tagName === "SELECT") newErrorMessage = newErrorMessage.replace("enter", "select");
            if (isVowel(fieldName.substring(0, 1))) {
                if (fieldName !== "username") article = "an"
            } else if (fieldName.indexOf("honor") ===
                0) article = "an";
            if ($input.attr("data-validation-confirm")) {
                newErrorMessage = newErrorMessage.replace("enter", "confirm");
                article = "your"
            }
            fieldName = $.trim(fieldName.replace(/\([a-zA-z0-9\s]*\)/g, ""));
            newErrorMessage = newErrorMessage.replace("[fieldName]", fieldName).replace("[article]", article);
            if ($input.get(0).tagName === "SELECT")
                if ($input.hasClass("event-pref")) newErrorMessage = newErrorMessage.replace("select a", "select a response to")
        }
        return newErrorMessage
    }
    $.fn.setOtherMinimum = function(minimum) {
        var errorMessage;
        var errorMessagePrefix = window.donationMinimumMessage;
        var $otherInput = this;
        if (typeof errorMessagePrefix !== "undefined") errorMessagePrefix = "Gift minimum is";
        errorMessage = errorMessagePrefix + " $" + minimum + ".";
        $otherInput.attr("data-validation-allowing", "range[" + minimum + ";999999.99], float").attr("min", minimum).attr("max", "999999.99").attr("data-validation-error-msg", errorMessage);
        return $otherInput
    };

    function addEntities(str) {
        var specChars = ["\u00e1", "\u00e9", "\u00ed", "\u00f3", "\u00fa", "\u00fc", "\u00f1",
            "\u00c1", "\u00c9", "\u00cd", "\u00f3", "\u00da", "\u00dc", "\u00d1"
        ];
        var chars = ["\u00e1", "\u00e9", "\u00ed", "\u00f3", "\u00fa", "\u00fc", "\u00f1", "\u00c1", "\u00c9", "\u00cd", "\u00d3", "\u00da", "\u00dc", "\u00d1"];
        var i;
        for (i = 0; i < chars.length; i++) {
            var pos = str.search(chars[i]);
            if (pos >= 0) str = str.replace(chars[i], specChars[i])
        }
        return str
    }
    var stcErrorMessagesEnglish = {
        andSpaces: " and spaces ",
        badAddress: "Please enter an address",
        badAlphaNumeric: "The input value can only contain alphanumeric characters ",
        badAlphaNumericExtra: " and ",
        badBirthDay: "Please enter a valid birth day",
        badBirthMonth: "Please enter a valid birth month.",
        badBirthYear: "Please enter a valid birth year.",
        badBrazilCEPAnswer: "The CEP entered is invalid.",
        badBrazilCPFAnswer: "The CPF entered is invalid.",
        badBrazilTelephoneAnswer: "The phone number entered is invalid.",
        badCcExpirationMonth: "Please enter a valid expiration month.",
        badCcExpirationYear: "Please enter a valid expiration year.",
        badCity: "Please enter a city",
        badCountry: "Please select a country",
        badCreditCard: "The credit card number is not correct.",
        badCreditCardEmpty: "Please enter a credit card number.",
        badCustomVal: "Please enter [article] [fieldName] in the proper format.",
        badCVV: "The CVV number was not correct.",
        badCVVEmpty: "Please enter a CVV.",
        badDate: "You have not given a correct date.",
        badDomain: "Incorrect domain value.",
        badEmail: "Please enter [article] [fieldName] in the proper format.",
        badInt: "The input value was not a correct number.",
        badNameFirst: "Please enter a first name in the proper format",
        badNameLast: "Please enter a last name in the proper format",
        badNumberOfSelectedOptionsEnd: " option.",
        badNumberOfSelectedOptionsStart: "Please select at least ",
        badPlNip: "The NIP entered is invalid.",
        badPlPesel: "The PESEL entered is invalid.",
        badPlRegon: "The REGON entered is invalid.",
        badreCaptcha: "Please confirm that you are not a bot.",
        badSecurityAnswer: "You have not given a correct answer to the security question.",
        badSecurityNumber: "Your social security number was incorrect.",
        badState: "Please select a state/province",
        badStrength: "The password isn't strong enough/",
        badTelephone: "You have not given a correct phone number.",
        badTime: "You have not given a correct time.",
        badUKNin: "Incorrect UK NIN.",
        badUKUtr: "Incorrect UK UTR Number.",
        badUKVatAnswer: "Incorrect UK VAT Number.",
        badUrl: "The input value is not a correct URL.",
        badZip: "Please enter a zip code",
        donationPremiumNotSelected: "Please select an option.",
        errorTitle: "Form submission failed.",
        groupCheckedEnd: " item(s).",
        groupCheckedRangeStart: "Please choose between ",
        groupCheckedTooFewStart: "Please choose at least ",
        groupCheckedTooManyStart: "Please choose a maximum of ",
        imageRatioNotAccepted: "Image ratio is not be accepted.",
        imageTooSmall: "the image was too small.",
        imageTooTall: "the image can not be taller than",
        imageTooWide: "the image can not be wider than",
        lengthBadEnd: " characters.",
        lengthBadStart: "The input value must be between ",
        lengthTooLongStart: "Please limit your [fieldName] to ",
        lengthTooShortStart: "The [fieldName] is shorter than ",
        max: "max",
        min: "min",
        notConfirmed: "Sorry, your [fieldName] does not match. Please try again.",
        passwordComplexityEnd: ".",
        passwordComplexityLowercaseInfo: " lowercase letter(s).",
        passwordComplexityNumericCharsInfo: " numeric character(s).",
        passwordComplexitySeparator: ", ",
        passwordComplexitySpecialCharsInfo: " special character(s).",
        passwordComplexityStart: "Password must contain at least ",
        passwordComplexityUppercaseInfo: " uppercase letter(s).",
        requiredField: "Please enter [article] [fieldName].",
        requiredFields: "You have not answered all required fields.",
        wrongFileDim: "Incorrect image dimensions,",
        wrongFileSize: "The file you are trying to upload is too large (max %s).",
        wrongFileType: "Only files of type %s is allowed."
    };
    var stcErrorMessages = stcErrorMessagesEnglish;
    "use strict";
    $.fn.addStateName = function() {
        this.each(function(index, element) {
            var $stateSelect = $(element);
            var $options = $stateSelect.find("option");
            $options.each(function(index, element) {
                var $option = $(element);
                switch ($option.val().trim()) {
                    case "AK":
                        $option.text("AK - Alaska");
                        break;
                    case "AL":
                        $option.text("AL - Alabama");
                        break;
                    case "AR":
                        $option.text("AR - Arkansas");
                        break;
                    case "AZ":
                        $option.text("AZ - Arizona");
                        break;
                    case "CA":
                        $option.text("CA - California");
                        break;
                    case "CO":
                        $option.text("CO - Colorado");
                        break;
                    case "CT":
                        $option.text("CT - Connecticut");
                        break;
                    case "DC":
                        $option.text("DC - District of Columbia");
                        break;
                    case "DE":
                        $option.text("DE - Delaware");
                        break;
                    case "FL":
                        $option.text("FL - Florida");
                        break;
                    case "GA":
                        $option.text("GA - Georgia");
                        break;
                    case "HI":
                        $option.text("HI - Hawaii");
                        break;
                    case "IA":
                        $option.text("IA - Iowa");
                        break;
                    case "ID":
                        $option.text("ID - Idaho");
                        break;
                    case "IL":
                        $option.text("IL - Illinois");
                        break;
                    case "IN":
                        $option.text("IN - Indiana");
                        break;
                    case "KS":
                        $option.text("KS - Kansas");
                        break;
                    case "KY":
                        $option.text("KY - Kentucky");
                        break;
                    case "LA":
                        $option.text("LA - Louisiana");
                        break;
                    case "MA":
                        $option.text("MA - Massachusetts");
                        break;
                    case "MD":
                        $option.text("MD - Maryland");
                        break;
                    case "ME":
                        $option.text("ME - Maine");
                        break;
                    case "MI":
                        $option.text("MI - Michigan");
                        break;
                    case "MN":
                        $option.text("MN - Minnesota");
                        break;
                    case "MO":
                        $option.text("MO - Missouri");
                        break;
                    case "MS":
                        $option.text("MS - Mississippi");
                        break;
                    case "MT":
                        $option.text("MT - Montana");
                        break;
                    case "NC":
                        $option.text("NC - North Carolina");
                        break;
                    case "ND":
                        $option.text("ND - North Dakota");
                        break;
                    case "NE":
                        $option.text("NE - Nebraska");
                        break;
                    case "NH":
                        $option.text("NH - New Hampshire");
                        break;
                    case "NJ":
                        $option.text("NJ - New Jersey");
                        break;
                    case "NM":
                        $option.text("NM - New Mexico");
                        break;
                    case "NV":
                        $option.text("NV - Nevada");
                        break;
                    case "NY":
                        $option.text("NY - New York");
                        break;
                    case "OH":
                        $option.text("OH - Ohio");
                        break;
                    case "OK":
                        $option.text("OK - Oklahoma");
                        break;
                    case "OR":
                        $option.text("OR - Oregon");
                        break;
                    case "PA":
                        $option.text("PA - Pennsylvania");
                        break;
                    case "RI":
                        $option.text("RI - Rhode Island");
                        break;
                    case "SC":
                        $option.text("SC - South Carolina");
                        break;
                    case "SD":
                        $option.text("SD - South Dakota");
                        break;
                    case "TN":
                        $option.text("TN - Tennessee");
                        break;
                    case "TX":
                        $option.text("TX - Texas");
                        break;
                    case "UT":
                        $option.text("UT - Utah");
                        break;
                    case "VA":
                        $option.text("VA - Virginia");
                        break;
                    case "VT":
                        $option.text("VT - Vermont");
                        break;
                    case "WA":
                        $option.text("WA - Washington");
                        break;
                    case "WI":
                        $option.text("WI - Wisconsin");
                        break;
                    case "WV":
                        $option.text("WV - West Virginia");
                        break;
                    case "WY":
                        $option.text("WY - Wyoming");
                        break;
                    case "AS":
                        $option.text("AS - American Samoa");
                        break;
                    case "FM":
                        $option.text("FM - Federated States of Micronesia");
                        break;
                    case "GU":
                        $option.text("GU - Guam");
                        break;
                    case "MH":
                        $option.text("MH - Marshall Islands");
                        break;
                    case "MP":
                        $option.text("MP - Northern Mariana Islands");
                        break;
                    case "PR":
                        $option.text("PR - Puerto Rico");
                        break;
                    case "PW":
                        $option.text("PW - Palau");
                        break;
                    case "VI":
                        $option.text("VI - Virgin Islands");
                        break;
                    case "AA":
                        $option.text("AA - Armed Forces Americas");
                        break;
                    case "AE":
                        $option.text("AE - Armed Forces");
                        break;
                    case "AP":
                        $option.text("AP - Armed Forces Pacific");
                        break;
                    case "AB":
                        $option.text("AB - Alberta");
                        break;
                    case "BC":
                        $option.text("BC - British Columbia");
                        break;
                    case "MB":
                        $option.text("MB - Manitoba");
                        break;
                    case "NB":
                        $option.text("NB - New Brunswick");
                        break;
                    case "NL":
                        $option.text("NL - Newfoundland and Labrador");
                        break;
                    case "NS":
                        $option.text("NS - Nova Scotia");
                        break;
                    case "NT":
                        $option.text("NT - Northwest Territories");
                        break;
                    case "NU":
                        $option.text("NU - Nunavut");
                        break;
                    case "ON":
                        $option.text("ON - Ontario");
                        break;
                    case "PE":
                        $option.text("PE - Prince Edward Island");
                        break;
                    case "QC":
                        $option.text("QC - Quebec");
                        break;
                    case "SK":
                        $option.text("SK - Saskatchewan");
                        break;
                    case "YT":
                        $option.text("YT - Yukon");
                        break;
                    case "No":
                        $option.text(" \x3eNone");
                        break
                }
            })
        })
    };
    $.fn.buttonProcessing = function() {
        var options = arguments.length >
            0 && arguments[0] !== undefined ? arguments[0] : {};
        var buttonProcessingSettingsKey = "button-processing-opts";

        function createMock($ele, settings) {
            var elementType = "";
            if (settings.type === "auto") elementType = $ele.get(0).tagName;
            else elementType = settings.type;
            return $("\x3c" + elementType + " /\x3e").attr("id", $ele.attr("id")).addClass(settings["class"]).addClass($ele.attr("class")).text(settings.text).val(settings.text).prop("disabled", true)
        }
        if (typeof options !== "string") {
            var settings = $.extend({}, $.fn.buttonProcessing.defaults,
                options);
            this.filter(":visible").each(function(index, element) {
                var $ele = $(element).data(buttonProcessingSettingsKey, settings);
                var $mock = createMock($ele, settings);
                settings.onInsertBefore.call(this, $ele, $mock);
                $mock.insertAfter($ele);
                $ele.addClass("js-hidden");
                settings.onInsertAfter.call(this, $ele, $mock)
            })
        } else if (typeof options !== "undefined" && options === "remove") this.each(function(index, element) {
            var $ele = $(element);
            var settings = $ele.data(buttonProcessingSettingsKey);
            var $mock = void 0;
            if (typeof settings ===
                "undefined" || typeof settings["class"] === "undefined") {
                console.error("Settings object not found on target element");
                return
            }
            $mock = $ele.next("." + settings["class"]);
            if ($mock.length > 0) {
                settings.onRemoveBefore.call(this, $ele, $mock);
                $mock.remove();
                $ele.removeClass("js-hidden");
                settings.onRemoveAfter.call(this, $ele, $mock)
            } else settings.onMockNotFound.call(this, $ele, $mock)
        });
        return this
    };
    $.fn.buttonProcessing.defaults = {
        "type": "auto",
        "text": "Processing...",
        "class": "button--processing-mock",
        "onInsertBefore": $.noop,
        "onInsertAfter": $.noop,
        "onRemoveBefore": $.noop,
        "onRemoveAfter": $.noop,
        "onMockNotFound": $.noop
    };
    var contentCatalog = function contentCatalog(templateId) {
        var transformers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        var tpl = document.getElementById(templateId);
        if (!tpl) return defaultValue;
        var content = tpl.innerHTML;
        if (transformers) _.forEach(transformers, function(f) {
            return content = f(content)
        });
        return content
    };
    var contentCatalogJSON = function contentCatalogJSON(templateId) {
        var transformers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        var transformersCombined = _.union([JSON.parse], transformers);
        return contentCatalog(templateId, transformersCombined, defaultValue)
    };
    var Country = function() {
        function Country() {
            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            _classCallCheck(this, Country);
            this.setCountry(name)
        }
        _createClass(Country, [{
                key: "isValid",
                value: function isValid() {
                    return typeof this.country === "string" && this.country.length > 0
                }
            }, {
                key: "isUSA",
                value: function isUSA() {
                    return this.country.match(/^United States$/ig) !== null
                }
            }, {
                key: "isCanada",
                value: function isCanada() {
                    return this.country.match(/^Canada$/ig) !== null
                }
            }, {
                key: "isDomestic",
                value: function isDomestic() {
                    return this.isValid() && (this.isUSA() || this.isCanada())
                }
            }, {
                key: "isInternational",
                value: function isInternational() {
                    return this.isValid() && !this.isDomestic()
                }
            },
            {
                key: "setCountry",
                value: function setCountry() {
                    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                    try {
                        this.country = name.trim()
                    } catch (e) {
                        this.country = ""
                    }
                }
            }
        ]);
        return Country
    }();
    var ensureArray = function ensureArray(argument) {
        if (!Array.isArray(argument)) return [argument];
        return argument
    };
    window.ensureArray = ensureArray;

    function formatNumberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    window.formatNumberWithCommas = formatNumberWithCommas;
    $.fn.groupStatesByCountry =
        function() {
            this.each(function(index, element) {
                var $stateSelect = $(element);
                var $option = $stateSelect.find("option");
                var $optGroupUS = $('\x3coptgroup label\x3d"United States"\x3e\x3c/optgroup\x3e');
                var $optGroupUSTerritories = $('\x3coptgroup label\x3d"US Territories"\x3e\x3c/optgroup\x3e');
                var $optGroupUSMilitary = $('\x3coptgroup label\x3d"US Military"\x3e\x3c/optgroup\x3e');
                var $optGroupCanada = $('\x3coptgroup label\x3d"Canada"\x3e\x3c/optgroup\x3e');
                var $optGroupOtherCountries = $('\x3coptgroup label\x3d"Other Countries"\x3e\x3c/optgroup\x3e');
                $stateSelect.append($optGroupUS, $optGroupUSTerritories, $optGroupUSMilitary, $optGroupCanada, $optGroupOtherCountries);
                $option.each(function(index, element) {
                    var $state = $(element);
                    switch ($state.val().trim()) {
                        case "":
                            $stateSelect.prepend($state);
                            break;
                        case "None":
                            $optGroupOtherCountries.append($state);
                            break;
                        case "AS":
                            $optGroupUSTerritories.append($state);
                            break;
                        case "FM":
                            $optGroupUSTerritories.append($state);
                            break;
                        case "GU":
                            $optGroupUSTerritories.append($state);
                            break;
                        case "MH":
                            $optGroupUSTerritories.append($state);
                            break;
                        case "MP":
                            $optGroupUSTerritories.append($state);
                            break;
                        case "PR":
                            $optGroupUSTerritories.append($state);
                            break;
                        case "PW":
                            $optGroupUSTerritories.append($state);
                            break;
                        case "VI":
                            $optGroupUSTerritories.append($state);
                            break;
                        case "AA":
                            $optGroupUSMilitary.append($state);
                            break;
                        case "AE":
                            $optGroupUSMilitary.append($state);
                            break;
                        case "AP":
                            $optGroupUSMilitary.append($state);
                            break;
                        case "AB":
                            $optGroupCanada.append($state);
                            break;
                        case "BC":
                            $optGroupCanada.append($state);
                            break;
                        case "MB":
                            $optGroupCanada.append($state);
                            break;
                        case "NB":
                            $optGroupCanada.append($state);
                            break;
                        case "NL":
                            $optGroupCanada.append($state);
                            break;
                        case "NS":
                            $optGroupCanada.append($state);
                            break;
                        case "NT":
                            $optGroupCanada.append($state);
                            break;
                        case "NU":
                            $optGroupCanada.append($state);
                            break;
                        case "ON":
                            $optGroupCanada.append($state);
                            break;
                        case "PE":
                            $optGroupCanada.append($state);
                            break;
                        case "QC":
                            $optGroupCanada.append($state);
                            break;
                        case "SK":
                            $optGroupCanada.append($state);
                            break;
                        case "YT":
                            $optGroupCanada.append($state);
                            break;
                        default:
                            $optGroupUS.append($state)
                    }
                })
            })
        };
    $.fn.handleServerErrors = function() {
        var $body = this;
        var $errorMessages = $body.find(".ErrorMessage");
        var errorMessage;
        $(window).load(function() {
            if ($errorMessages.length > 0) {
                errorMessage = $.trim($errorMessages.eq(0).text());
                if ($errorMessages.length > 1) {
                    window.scrollTo($errorMessages.eq(0), -20);
                    errorMessage = $.trim($errorMessages.eq(1).text())
                }
                setAnalyticsError("422", errorMessage, "Submission Error")
            }
        });
        return $body
    };
    $.fn.isElementInViewport = function($element) {
        var $window = this;
        var elementHeight = $element.height();
        var elementTopPosition = $element.offset().top;
        var elementBottomPosition = elementTopPosition + elementHeight;
        var returnValue = false;
        var windowHeight = $window.height();
        var windowTopPosition = $window.scrollTop();
        var windowBottomPosition = windowTopPosition + windowHeight;
        if ($element.hasClass("progress-ring__progress")) {
            elementHeight = $element.closest(".progress-ring").height();
            elementBottomPosition = elementTopPosition + elementHeight
        }
        if ($element.length > 1) console.error("[isElementInViewport] multiple elements were passed as an argument, we are expecting only one.");
        else if (elementBottomPosition >= windowTopPosition && elementTopPosition <= windowBottomPosition) {
            $element.addClass("js-visible-in-viewport");
            returnValue = true
        } else $element.removeClass("js-visible-in-viewport");
        return returnValue
    };

    function moveFancyboxAttributes(fromElement, toElement) {
        var attribute = "";
        var fromElementAttributes = [];
        if (typeof fromElement !== "undefined" && typeof toElement !== "undefined") {
            fromElementAttributes = fromElement.attributes;
            for (var index = 0; index < fromElementAttributes.length; index++) {
                attribute =
                    fromElementAttributes[index];
                if (attribute.name.indexOf("data-fancybox") > -1) toElement.setAttribute(attribute.name, attribute.value)
            }
        }
    }
    window.moveFancyboxAttributes = moveFancyboxAttributes;
    $.expr.filters.offscreen = function(el) {
        var rect = el.getBoundingClientRect();
        return rect.x + rect.width < 0 || rect.y + rect.height < 0 || rect.x > window.innerWidth || rect.y > window.innerHeight
    };

    function preloadImage(imageUrl) {
        var imageToLoad = new Image;
        var promise = new Promise(function(resolve) {
            imageToLoad.onload = function() {
                resolve(imageToLoad)
            };
            imageToLoad.src = imageUrl
        });
        return promise
    }
    window.preloadImage = preloadImage;
    $.fn.setDelayedInputAttribute = function(attr, value) {
        var $input = this;
        var inputAttribute = $input.attr(attr);
        var intervalID;
        intervalID = setInterval(function() {
            if (typeof inputAttribute !== "undefined" && inputAttribute === value || typeof value === "undefined" && typeof inputAttribute === "undefined") clearInterval(intervalID);
            else if (typeof value === "undefined") $input.removeAttr(attr);
            else $input.attr(attr, value)
        }, 500);
        return $input
    };

    function showPostLoginText() {
        var $autoRegistrationText =
            $body.find(".text--auto-registration");
        var loginType = void 0;
        var userCookie = Cookies.getJSON("stc-member");
        if (typeof userCookie !== "undefined") {
            loginType = userCookie.loginType;
            if (loginType === "autoregistration" && $autoRegistrationText.length > 0) $autoRegistrationText.removeClass("hidden")
        }
    }
    var STCSessionStorage = function() {
        function STCSessionStorage(key) {
            _classCallCheck(this, STCSessionStorage);
            this.key = key
        }
        _createClass(STCSessionStorage, [{
            key: "set",
            value: function set(data) {
                try {
                    return sessionStorage.setItem(this.key,
                        JSON.stringify(data))
                } catch (exception) {
                    return
                }
            }
        }, {
            key: "get",
            value: function get() {
                try {
                    var retrievedValue = sessionStorage.getItem(this.key);
                    if (typeof retrievedValue !== "undefined" && retrievedValue !== null) return JSON.parse(retrievedValue);
                    else return retrievedValue
                } catch (exception) {
                    return
                }
            }
        }, {
            key: "remove",
            value: function remove() {
                try {
                    return sessionStorage.removeItem(this.key)
                } catch (exception) {
                    return
                }
            }
        }]);
        return STCSessionStorage
    }();
    $.fn.submitFormOnEnter = function($mainSubmitButton) {
        var $form = this;
        $form.on("keypress",
            "input:not(:submit)",
            function(event) {
                var keycode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
                if (keycode === 13) {
                    event.preventDefault();
                    $mainSubmitButton.trigger("click")
                }
            });
        return $form
    };
    $.fn.textInputMaxLength = function() {
        var $input = this;
        if ($input.is(":text")) $input.prop("maxLength", 50)
    };
    $.fn.textInputPattern = function() {
        var $input = this;
        var spanCharText = "";
        if (window.isLanguage("espanol")) {
            var spanChars = ["\u00e1", "\u00e9", "\u00ed", "\u00f3", "\u00fa", "\u00fc", "\u00f1", "\u00c1", "\u00c9",
                "\u00cd", "\u00f3", "\u00da", "\u00dc", "\u00d1"
            ];
            spanCharText = spanChars.join("")
        }
        if ($input.is(":text")) $input.attr({
            "pattern": "^([a-z A-Z-'" + spanCharText + "]+)$"
        })
    };

    function waitMilliseconds(ms) {
        var start = (new Date).getTime();
        var end = start;
        while (end < start + ms) end = (new Date).getTime()
    }
    window.waitMilliseconds = waitMilliseconds;

    function scrollTo(target) {
        var adjustmentMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var $target = target;
        var offset = 0;
        if (typeof target == "number") return;
        if (typeof target ===
            "string") $target = $(target);
        if ($target.length > 0) offset = $target.offset().top;
        offset = offset + adjustmentMargin;
        $("html, body").not(":animated").animate({
            scrollTop: offset
        }, 800)
    }
    window.scrollTo = scrollTo;

    function addToCartFromProductViewAnalytics(productId) {
        var productDetails = void 0;
        try {
            productDetails = window._dtm("getProductFromProductView", productId);
            if (typeof productDetails !== "undefined") window._dtm("setCartAdd", productDetails.productInfo)
        } catch (e) {
            console.error(e)
        }
    }
    window.addToCartFromProductViewAnalytics =
        addToCartFromProductViewAnalytics;

    function removeFromCartFromProductViewAnalytics(productId) {
        var productDetails = void 0;
        try {
            productDetails = window._dtm("getProductFromProductView", productId);
            if (typeof productDetails !== "undefined") window._dtm("setCartRemove", productDetails.productInfo);
            else console.log("not found, no removal attempt", productId);
            return true
        } catch (e) {
            console.error(e);
            return false
        }
    }
    window.removeFromCartFromProductViewAnalytics = removeFromCartFromProductViewAnalytics;

    function setCartContents(products) {
        try {
            window._dtm("setEcomm", {
                item: products
            })
        } catch (e) {
            console.error(e)
        }
    }
    window.setCartContents = setCartContents;

    function setProductToCartFromProductViewAnalytics(productId) {
        var productDetails = void 0;
        try {
            productDetails = window._dtm("getProductFromProductView", productId);
            setProductToCart(productDetails);
            return true
        } catch (e) {
            console.error(e);
            return false
        }
    }
    window.setProductToCartFromProductViewAnalytics = setProductToCartFromProductViewAnalytics;

    function setProductToCart(productDetails) {
        try {
            if (typeof productDetails !== "undefined") window._dtm("addProductToCart",
                productDetails);
            else console.error("[setProductToCart] productDetails are not defined", productDetails);
            return true
        } catch (e) {
            console.error(e);
            return false
        }
    }
    window.setProductToCart = setProductToCart;

    function setProductViewAnalytics(products) {
        try {
            window._dtm("setProductViewData", products);
            return true
        } catch (e) {
            console.error(e);
            return false
        }
    }
    window.setProductViewAnalytics = setProductViewAnalytics;

    function setTransactionAnalytics(trackingCode, trackingCodePrefix, sourceCode, paymentType) {
        var time;
        var trackingCodeArr;
        var transactionSettings = {};
        if (typeof sourceCode !== "undefined") $.extend(transactionSettings, {
            "transactionsourcecode": sourceCode
        });
        if (typeof trackingCode !== "undefined" && typeof trackingCodePrefix !== "undefined") {
            if (trackingCode === "") {
                time = new Date;
                trackingCode = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate() + "-" + time.getHours() + "_" + time.getMinutes()
            }
            $.extend(transactionSettings, {
                "transactionID": trackingCode + trackingCodePrefix
            });
            trackingCodeArr = trackingCode.split("-");
            trackingCode = trackingCodePrefix[0] +
                trackingCodeArr[trackingCodeArr.length - 1];
            $.extend(transactionSettings, {
                "purchaseID": trackingCode
            })
        }
        if (typeof paymentType !== "undefined") $.extend(transactionSettings, {
            "paymentMethod": paymentType
        });
        try {
            window._dtm("setEcomm", transactionSettings)
        } catch (e) {
            console.error(e)
        }
    }
    window.setTransactionAnalytics = setTransactionAnalytics;

    function trackProductView() {
        try {
            window._dtm("track", "ecommerce_product_view");
            return true
        } catch (e) {
            console.error(e);
            return false
        }
    }
    window.trackProductView = trackProductView;

    function trackTransactionSuccessAnalytics() {
        var dataToStore = [];
        var storedData = new STCSessionStorage("stc-transactions");
        var transactionId = void 0;
        var transactionFound = void 0;
        var transactionsTracked = storedData.get();
        var transactionToStore = void 0;
        if (typeof window.digitalData !== "undefined" && window.digitalData.hasOwnProperty("transaction") && window.digitalData.transaction.hasOwnProperty("transactionID")) {
            transactionId = window.digitalData.transaction.transactionID;
            transactionToStore = {
                transactionId: transactionId,
                "transactionRecorded": 1
            };
            dataToStore = [transactionToStore];
            transactionFound = _.find(transactionsTracked, {
                "transactionId": transactionId
            })
        }
        if (typeof transactionId !== "undefined" && transactionId !== "" && (transactionsTracked === null || typeof transactionFound === "undefined" || transactionFound.transactionRecorded != 1)) try {
            window._dtm("track", "ecommerce_thankyou_view");
            if (transactionsTracked !== null) dataToStore = transactionsTracked.concat(dataToStore);
            storedData.set(dataToStore)
        } catch (e) {
            console.error(e)
        } else console.debug("[trackTransactionSuccessAnalytics] the transaction was already recorded in analytics.",
            transactionId)
    }
    window.trackTransactionSuccessAnalytics = trackTransactionSuccessAnalytics;

    function updateProductViewAnalytics(product) {
        try {
            window._dtm("updateProductViewData", product);
            return true
        } catch (e) {
            console.error(e);
            return false
        }
    }
    window.updateProductViewAnalytics = updateProductViewAnalytics;

    function getAnalyticsUserType(userTypeDefault, analyticsFormType) {
        var userCookie = Cookies.getJSON("stc-member");
        var userType = userTypeDefault;
        var userLoginType = userCookie.loginType;
        if (typeof userCookie !== "undefined" ||
            userCookie !== "") {
            if (userCookie.isDonor) userType += "|donor";
            if (userCookie.isSponsor) userType += "|sponsor";
            if (userCookie.isPartner) userType += "|partner";
            if (userCookie.isFaf) userType += "|faf";
            if (!userCookie.donorId || userCookie.donorId === "") userType = "new " + userType;
            if (userCookie.loginType && analyticsFormType.indexOf("sign in") !== -1) userType = userType + " " + userLoginType;
            console.log("[getAnalyticsUserType]", userType);
            return userType
        } else console.error("[getAnalyticsUserType] stc-member cookie is not defined, as epxected",
            userCookie)
    }

    function getLoginType(interactionLocation) {
        var userCookie = Cookies.getJSON("stc-member");
        var loginType = userCookie.loginType;
        if (interactionLocation === "registration") loginType = loginType.replace("auto", "");
        userCookie.loginType = loginType;
        Cookies.set("stc-member", userCookie, {
            expires: 365,
            path: "/",
            domain: window.cookieDomain
        });
        return loginType
    }

    function getSocialMediaFormType() {
        var returnValue = false;
        var userSocialLoginInfo = Cookies.getJSON("stc-social-login");
        if (typeof userSocialLoginInfo !== "undefined")
            if (typeof userSocialLoginInfo.formType !==
                "undefined") returnValue = userSocialLoginInfo.formType + ":" + userSocialLoginInfo.socialMedia;
            else returnValue = ":" + userSocialLoginInfo.socialMedia;
        Cookies.remove("stc-social-login", {
            path: "/",
            domain: window.cookieDomain
        });
        return returnValue
    }

    function getUserDetails() {
        var userInfoRetrieved = new $.Deferred;
        luminateExtend.api({
            "api": "cons",
            "callback": function callback(data) {
                if (parseUserDetails(data)) userInfoRetrieved.resolve();
                else userInfoRetrieved.reject()
            },
            "data": "method\x3dgetUser",
            "requiresAuth": true,
            "useHTTPS": true
        });
        return userInfoRetrieved
    }
    window.getUserDetails = getUserDetails;

    function getUserInfoSetAnalytics(interactionLocation) {
        var firstName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        var returnPromise = new $.Deferred;
        var userCookie = Cookies.getJSON("stc-member");
        var userInfoRetrieved = new $.Deferred;
        var userInteractionsRetrieved = new $.Deferred;
        var userLoggedIn = Cookies.getJSON("stc-logged-in");
        if (typeof userLoggedIn === "undefined") {
            Cookies.remove("stc-member", {
                path: "/",
                domain: window.cookieDomain
            });
            userCookie = {};
            if (typeof firstName !== "undefined") userCookie.firstName = firstName;
            Cookies.set("stc-member", userCookie, {
                expires: 365,
                path: "/",
                domain: window.cookieDomain
            });
            userInteractionsRetrieved = getUserInteractions();
            userInfoRetrieved = getUserDetails();
            $.when(userInteractionsRetrieved, userInfoRetrieved).done(function() {
                setAnalyticsParameters(interactionLocation);
                setTimeout(returnPromise.resolve, 1E3)
            }).fail(function() {
                console.debug("[getUserInfoSetAnalytics] Could not get user information, user is likely not logged in",
                    interactionLocation);
                returnPromise.reject("user-not-logged-in")
            })
        } else {
            console.debug("[getUserInfoSetAnalytics] user is logged in, no need to track registration");
            returnPromise.reject("logged-in")
        }
        return returnPromise
    }
    window.getUserInfoSetAnalytics = getUserInfoSetAnalytics;

    function getUserInteractions() {
        var allUserInteractionsRetrieved = new $.Deferred;
        var externalLoginInteractionsRetreived = new $.Deferred;
        var externalLoginInteractionData;
        var loginInteractionsRetrieved = new $.Deferred;
        var loginInteractionsData;
        $.when(retrieveUserIntreactions(19)).done(function(data) {
            loginInteractionsData = data;
            loginInteractionsRetrieved.resolve()
        });
        $.when(retrieveUserIntreactions(75)).done(function(data) {
            externalLoginInteractionData = data;
            externalLoginInteractionsRetreived.resolve()
        });
        $.when(loginInteractionsRetrieved, externalLoginInteractionsRetreived).done(function() {
            if (parseUserInteractions(loginInteractionsData, externalLoginInteractionData)) allUserInteractionsRetrieved.resolve();
            else allUserInteractionsRetrieved.reject()
        });
        return allUserInteractionsRetrieved
    }

    function retrieveUserIntreactions(interactionTypeId) {
        var userInteractionsRetrieved = new $.Deferred;
        luminateExtend.api({
            "api": "cons",
            "callback": function callback(interactionsData) {
                if (typeof interactionsData !== "undefined") userInteractionsRetrieved.resolve(interactionsData);
                else userInteractionsRetrieved.reject()
            },
            "data": "method\x3dgetUserInteractions\x26interaction_type_id\x3d" + interactionTypeId,
            "requiresAuth": true,
            "useHTTPS": true
        });
        return userInteractionsRetrieved
    }
    window.getUserInteractions = getUserInteractions;

    function parseUserDetails(data) {
        var $header;
        var returnValue = true;
        var error = data.errorResponse;
        var user = data.getConsResponse;
        var userCookie = Cookies.getJSON("stc-member");
        if (typeof userCookie === "undefined") userCookie = {};
        if ((typeof user === "undefined" ? "undefined" : _typeof(user)) === "object") {
            userCookie.firstName = user.name.first;
            userCookie.consId = user.cons_id;
            if (user.member_id !== null) userCookie.donorId = user.member_id;
            if (user.custom["boolean"][0].content === "true") userCookie.isSponsor =
                1;
            else userCookie.isSponsor = 0;
            if (user.custom["boolean"][1].content === "true") userCookie.isPartner = 1;
            else userCookie.isPartner = 0;
            if (user.custom["boolean"][2].content === "true") userCookie.isFaf = 1;
            else userCookie.isFaf = 0;
            if (user.custom["boolean"][4].content === "true") userCookie.isDonor = 1;
            else userCookie.isDonor = 0;
            Cookies.set("stc-member", userCookie, {
                expires: 365,
                path: "/",
                domain: window.cookieDomain
            });
            Cookies.set("stc-logged-in", 1, {
                path: "/",
                domain: window.cookieDomain
            });
            $header = $("#header");
            $header.detectLoginState()
        } else {
            console.log("[parseUserDetails] error in API results. Error: ",
                error.code, error.message);
            returnValue = false
        }
        return returnValue
    }

    function parseUserInteractions(loginInteractionData, externalLoginInteractionData) {
        var errorMessage = "";
        var externalLoginInteractions = externalLoginInteractionData.getUserInteractionsResponse;
        var loginInteractions = loginInteractionData.getUserInteractionsResponse;
        var returnValue;
        var userAction;
        var userCookie = Cookies.getJSON("stc-member");
        if (typeof loginInteractions !== "undefined" && typeof externalLoginInteractions !== "undefined")
            if ($.isEmptyObject(loginInteractions) &&
                $.isEmptyObject(externalLoginInteractions)) userAction = "autoregistration";
            else if ($.isEmptyObject(externalLoginInteractions) && !$.isEmptyObject(loginInteractions) && !Array.isArray(loginInteractions.interaction) || $.isEmptyObject(loginInteractions) && !$.isEmptyObject(externalLoginInteractions) && !Array.isArray(externalLoginInteractions.interaction)) userAction = "activation";
        else userAction = "sign in";
        if (typeof userAction !== "undefined") {
            if (typeof userCookie === "undefined" || userCookie === "") userCookie = {};
            userCookie.loginType =
                userAction;
            returnValue = userAction;
            Cookies.set("stc-member", userCookie, {
                expires: 365,
                path: "/",
                domain: window.cookieDomain
            })
        } else {
            if (typeof loginInteractionData.errorResponse !== "undefined") errorMessage = loginInteractionData.errorResponse.message;
            if (typeof externalLoginInteractionData.errorResponse !== "undefined") errorMessage += externalLoginInteractionData.errorResponse.message;
            console.debug("[parseUserInteractions] error in API response. Error: ", errorMessage);
            returnValue = false
        }
        return returnValue
    }

    function setAnalyticsParameters(interactionLocation) {
        var analyticsLoginType;
        var socialMediaFormType = getSocialMediaFormType();
        if (socialMediaFormType)
            if (socialMediaFormType.length === 3) interactionLocation += socialMediaFormType;
            else if (interactionLocation.indexOf("sign in") !== -1) interactionLocation = interactionLocation.replace("sign in", socialMediaFormType);
        else if (interactionLocation.indexOf("registration") !== -1) interactionLocation = interactionLocation.replace("registration", socialMediaFormType);
        else interactionLocation = socialMediaFormType;
        analyticsLoginType = getLoginType(interactionLocation);
        if (typeof interactionLocation !== "undefined" && typeof analyticsLoginType !== "undefined") setUserAnalytics(interactionLocation, analyticsLoginType, true)
    }

    function setSocialMediaLoginInfo() {
        if (typeof janrain !== "undefined" && typeof janrain.events !== "undefined") janrain.events.onModalOpen.addHandler(function() {
            var $modal = $("#janrainModal");
            var $socialLoginLinks = $("#janrainProviderPages").find("a");
            $modal.attr("data-s-region-id", "Overlay|Social Media Options|||" + $body.attr("data-user-state"));
            $socialLoginLinks.each(function(index,
                element) {
                var $link = $(element);
                $link.attr("data-s-object-id", "Button|" + $link.text().trim() + "|")
            })
        });
        $(document).on("click", '.providers li[id^\x3d"janrain-"], #janrainAuthReturnExperience a[id^\x3d"janrain-"]', function(e) {
            var $clicked = $(e.currentTarget);
            var socialMedia;
            socialMedia = $clicked.attr("id").replace("janrain-", "");
            if (socialMedia === "twitter") socialMedia = "tw";
            else if (socialMedia === "facebook") socialMedia = "fb";
            else if (socialMedia === "googleplus") socialMedia = "g1";
            else if (socialMedia === "linkedin") socialMedia =
                "in";
            Cookies.set("stc-social-login", {
                socialMedia: socialMedia
            }, {
                path: "/",
                domain: window.cookieDomain
            })
        })
    }
    window.setSocialMediaLoginInfo = setSocialMediaLoginInfo;

    function setUserAnalytics(loginLocation, loginType) {
        var setUserObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        if (typeof $body === "undefined") $body = $("body");
        try {
            if (setUserObject) window._dtm("setUserData", $body);
            window._dtm("setRegistration", {
                location: loginLocation,
                loginType: loginType
            });
            window._dtm("track", "site_reg_login");
            console.log('[setUserAnalytics] user login location "' + loginLocation + '" and login type "' + loginType + '"')
        } catch (e) {
            console.error(e)
        }
    }
    window.setUserAnalytics = setUserAnalytics
})(window, document, window.$dnlJq);
(function() {
    try {
        var canonical = document.getElementById("canonical");
        var signout = document.getElementById("signout-link");
        if (canonical && signout) signout.href = signout.href + encodeURIComponent(canonical.href)
    } catch (e) {
        if (typeof console !== "undefined" && typeof console.log !== "undefined") console.log("nexturl" + e.message)
    }
})();
(function() {
    jQuery(document).ready(function() {
        var $alertContainer;
        $alertContainer = $("body").find(".section--alert");
        if ($alertContainer.length > 0) {
            var $sectionClose = $alertContainer.find(".section__close");
            $alertContainer.each(function(index, element) {
                var $currentAlert = $(element);
                if (typeof Cookies.get("stc-" + $currentAlert.prop("id")) !== "undefined") $currentAlert.addClass("js-hidden");
                else {
                    $currentAlert.removeClass("js-hidden");
                    setTimeout(function() {
                            impressionAnalytics($currentAlert.attr("data-s-region-id"))
                        },
                        300)
                }
            });
            if ($sectionClose.length > 0) $sectionClose.on("click", function(e) {
                var $currentAlert = $(e.currentTarget).closest($alertContainer);
                var cookieExpiration = $currentAlert.data("stc-alert-expiration");
                $currentAlert.slideUp();
                if (typeof cookieExpiration === "undefined" || cookieExpiration === 0) Cookies.set("stc-" + $currentAlert.prop("id"), 1, {
                    path: "/",
                    domain: window.location.hostname
                });
                else Cookies.set("stc-" + $currentAlert.prop("id"), 1, {
                    path: "/",
                    domain: window.location.hostname,
                    expires: cookieExpiration
                })
            })
        }
    })
})();
(function() {
    function debug(msg, e) {
        if (typeof console !== "undefined" && typeof console.error !== "undefined") console.error(msg + e.message)
    }
    var tilegrids = document.getElementsByClassName("tilegrid");
    for (var tilegridsI = 0, tilegridsL = tilegrids.length; tilegridsI < tilegridsL; tilegridsI++) try {
        var sortFeature = tilegrids[tilegridsI].getElementsByClassName("tile__form--sort");
        if (sortFeature.length > 0 && !/hardcoded/.test(tilegrids[tilegridsI].className)) {
            var tiles = tilegrids[tilegridsI].getElementsByClassName("tilegrid__tiles");
            var reservedTiles = [];
            var tileOrders = [];
            var azTiles = [];
            var zaTiles;
            var i = 0;
            var l = 0;
            for (i = 0, l = tiles.length; i < l; i++) {
                if (!/tilesquare/.test(tiles[i].className)) reservedTiles.push(i);
                else if (tiles[i].getElementsByClassName("tilesquare__wrapper")[0].hasAttribute("data-alphabet")) azTiles.push({
                    lastname: tiles[i].getElementsByClassName("tilesquare__wrapper")[0].getAttribute("data-alphabet"),
                    initialOrder: i
                });
                else reservedTiles.push(i);
                tileOrders.push({
                    initialOrder: i
                })
            }
            azTiles = azTiles.sort(function(a, b) {
                return a.lastname.localeCompare(b.lastname)
            });
            zaTiles = azTiles.slice(0);
            zaTiles.reverse();
            for (i = 0, l = reservedTiles.length; i < l; i++) {
                azTiles.splice(reservedTiles[i], 0, {
                    lastname: "",
                    initialOrder: reservedTiles[i]
                });
                zaTiles.splice(reservedTiles[i], 0, {
                    lastname: "",
                    initialOrder: reservedTiles[i]
                })
            }
            for (i = 0, l = tiles.length; i < l; i++) {
                tileOrders[azTiles[i].initialOrder].azAscending = i;
                tileOrders[zaTiles[i].initialOrder].zaDescending = i
            }

            function sort(method) {
                try {
                    switch (method) {
                        case "za":
                            for (var i = 0, l = tiles.length; i < l; i++) tiles[i].style.order = tileOrders[i].zaDescending;
                            break;
                        case "az":
                            for (var i = 0, l = tiles.length; i < l; i++) tiles[i].style.order = tileOrders[i].azAscending;
                            break;
                        default:
                            for (var i = 0, l = tiles.length; i < l; i++) tiles[i].style.order = tileOrders[i].initialOrder;
                            break
                    }
                } catch (e) {
                    debug("sort: ", e)
                }
            }
            sortFeature[0].addEventListener("submit", function(e) {
                e.preventDefault();
                sort(e.target.sortoption.value)
            });
            sort(sortFeature[0].sortoption.value)
        }
    } catch (e) {
        debug("tilegrids: ", e)
    }

    function shadowbox(o) {
        if (generate(o)) {
            try {
                if (window.innerWidth - document.body.offsetWidth > 0) {
                    document.body.style.marginRight =
                        window.innerWidth - document.body.offsetWidth + "px";
                    console.log(window.innerWidth - document.body.offsetWidth)
                }
            } catch (e) {
                debug("scrollbar width: ", e);
                console.log("scrollbar width" + e.message)
            }
            document.body.className += " body--shadowbox-fixed";
            document.getElementsByClassName("shadowbox__slide")[0].addEventListener("click", close, false);
            document.getElementsByClassName("shadowbox__close")[0].addEventListener("click", close, false);
            var personVideos = document.getElementsByClassName("changemaker-has-video");
            document.getElementsByClassName("shadowbox__container")[0].focus();
            for (var i = 0, l = personVideos.length; i < l; i++) try {
                personVideos[i].getElementsByClassName("video-link-shadowbox")[0].addEventListener("click", function(e) {
                    e.preventDefault();
                    var parent = this.parentElement;
                    while (parent && !/shadowbox__header--tile/.test(parent.className)) parent = parent.parentElement;
                    handlePersonVideo(parent)
                })
            } catch (e) {
                debug("pv", e)
            }
        }
    }

    function generate(el) {
        if (el) {
            var docFrag = document.createDocumentFragment();
            var arr = ["shadowbox__container", "shadowbox__inner", "shadowbox__stage", "shadowbox__slide"];
            var div = [];
            var extraDiv;
            var a;
            var clonedDiv;
            for (var i = 0, l = arr.length; i < l; i++) {
                div[i] = document.createElement("div");
                div[i].className = arr[i];
                if (i === 0) {
                    docFrag.appendChild(div[i]);
                    extraDiv = document.createElement("div");
                    extraDiv.className = "shadowbox__overlay";
                    div[i].appendChild(extraDiv);
                    div[i]["data-s-region-id"] = el.getAttribute("data-s-region-id");
                    div[i].tabindex = "-1"
                }
                if (i > 0) div[i - 1].appendChild(div[i]);
                if (i == 3) {
                    clonedDiv = el.cloneNode(true);
                    clonedDiv.className += " shadowbox__content--show";
                    div[i].appendChild(clonedDiv);
                    a = document.createElement("a");
                    a.title = "Close";
                    a.className = "shadowbox__close";
                    a.href = "javascript:;";
                    a["data-s-object-id"] = "Image|Close|Close the Shadowbox";
                    clonedDiv.appendChild(a)
                }
            }
            document.body.appendChild(docFrag);
            return true
        } else return false
    }

    function close(o) {
        try {
            if (o.target === this) {
                document.getElementsByClassName("shadowbox__container")[0].parentNode.removeChild(document.getElementsByClassName("shadowbox__container")[0]);
                document.body.className = document.body.className.replace(/body--shadowbox-fixed/,
                    "");
                document.body.style.marginRight = "0"
            }
        } catch (e) {
            debug("close: ", e)
        }
    }
    var shadowboxPersons = document.querySelectorAll(".tilegrid.tilegrid--component [data-shadowbox\x3d'true']");

    function attachShadowbox(e) {
        var box = e.getElementsByClassName("tile__shadowbox")[0];
        shadowbox(box);
        if (window._dtm != "undefined" && window._dtm != null) window._dtm("triggerImpression", e.getAttribute("data-s-region-id"))
    }
    for (var i = 0, l = shadowboxPersons.length; i < l; i++) try {
        shadowboxPersons[i].parentNode.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            attachShadowbox(this);
            document.getElementsByClassName("shadowbox__container")[0].focus();
            debug(e.target, {
                "message": "shadowbox person"
            })
        })
    } catch (e) {
        debug("shadowboxpersons: ", e)
    }

    function handlePersonVideo(e) {
        var videos = e.getElementsByClassName("video--shadowbox");
        var imgs = e.parentElement.parentElement.getElementsByClassName("shadowbox-video-img");
        e.getElementsByClassName("video__watch-ask-container--shadowbox")[0].style.display = "none";
        videos[0].style.display = "block";
        imgs[0].style.visibility =
            "hidden"
    }
})();
(function() {
    var resultsContainer = document.querySelectorAll(".relatedlinksresultscont");
    var envTest = document.querySelectorAll(".component-title--scus-authoring");
    if (envTest.length === 0)
        for (var i = 0, l = resultsContainer.length; i < l; i++) {
            var resultsDiv = resultsContainer[i].querySelector(".rl__results");
            var paginationDiv = resultsContainer[i].querySelector(".rl__pagination");
            var div = resultsDiv;
            if (resultsDiv && paginationDiv !== null) try {
                var obj = {
                    canonical: document.getElementById("canonical"),
                    resultsDiv: div,
                    urlSupport: typeof window.URL ===
                        "function",
                    paginationDiv: paginationDiv,
                    resultsPath: div.getAttribute("data-results-path") ? window.location.pathname.replace(/\..*$/, "") + "/" + div.getAttribute("data-results-path") : "",
                    hasButton: div.getAttribute("data-button"),
                    imageVariant: div.getAttribute("data-image-variant"),
                    nextButton: paginationDiv ? paginationDiv.querySelector(".rl__link--next") : null,
                    prevButton: paginationDiv ? paginationDiv.querySelector(".rl__link--previous") : null,
                    currentPageSpan: paginationDiv ? paginationDiv.querySelector(".rl__current-page-index") : null,
                    totalResults: 0,
                    loadedTotalResults: 0,
                    totalPages: 0,
                    resultsPerPage: div.getAttribute("data-results-per-page") * 1,
                    currentPage: 1,
                    nextPage: 2,
                    previousPage: 0,
                    pages: resultsDiv ? [resultsDiv.querySelector(".rl__container")] : [],
                    verticalRectangleSizes: "(max-width: 1170px) 45vw, (max-width: 799x) 96vw, 526px",
                    verticalSquareSizes: "(max-width: 1170px) 31vw, (max-width: 799px) 96vw, 362px",
                    setCanonical: function() {
                        const base = window.location.protocol + "//" + window.location.hostname + window.location.pathname;
                        const url =
                            new URL(base);
                        const currentUrl = new URL(window.location);
                        if (this.currentPage !== 1) url.searchParams.set("page", this.currentPage);
                        if (currentUrl.searchParams.get("cntnt") !== null) url.searchParams.set("cntnt", currentUrl.searchParams.get("cntnt"));
                        this.canonical.href = decodeURIComponent(url.href)
                    },
                    setButtons: function() {
                        if (this.urlSupport) {
                            const url = new URL(window.location);
                            if (this.hasNext()) {
                                url.searchParams.set("page", this.nextPage);
                                this.nextButton.href = decodeURIComponent(url.href)
                            }
                            if (this.hasPrevious() &&
                                this.previousPage !== 1) {
                                url.searchParams.set("page", this.previousPage);
                                this.prevButton.href = decodeURIComponent(url.href)
                            } else if (this.hasPrevious() && this.previousPage === 1) {
                                url.searchParams["delete"]("page");
                                this.prevButton.href = decodeURIComponent(url.href)
                            }
                        }
                    },
                    next: function(pop) {
                        console.log("next event");
                        pop = typeof pop === "undefined" ? false : pop;
                        event.preventDefault();
                        if (this.hasNext()) {
                            console.log("this has next");
                            this.previousPage = this.currentPage;
                            this.currentPage = this.currentPage + 1;
                            this.nextPage = this.currentPage +
                                1;
                            if (!pop && this.urlSupport) {
                                const url = new URL(window.location);
                                url.searchParams.set("page", this.currentPage);
                                this.setButtons();
                                this.setCanonical();
                                window.history.pushState({
                                    page: this.currentPage
                                }, "", url)
                            }
                            if (typeof this.pages[this.nextPage] === "undefined") {
                                if (this.resultsDiv.querySelectorAll(".rl__container").length > this.pages.length) this.pages.push(this.resultsDiv.querySelectorAll(".rl__container")[this.resultsDiv.querySelectorAll(".rl__container").length - 1]);
                                try {
                                    var self = this;
                                    $.ajax({
                                        dataType: "json",
                                        crossDomain: false,
                                        type: "GET",
                                        obj: self,
                                        url: self.resultsPath + ".results.json/" + self.currentPage + ".json",
                                        success: function(data) {
                                            console.log("success");
                                            if (data.results && data.totalResults) {
                                                var docFrag = document.createDocumentFragment();
                                                var container = self.createResults(self.nextPage, data.results);
                                                docFrag.appendChild(container);
                                                self.resultsDiv.appendChild(docFrag);
                                                self.pages.push(container)
                                            }
                                        },
                                        error: obj.error
                                    })
                                } catch (e) {
                                    console.log("error in loadadditionalresults");
                                    console.error(e.message)
                                }
                            }
                            this.pages[this.previousPage -
                                1].className += " hidden";
                            this.pages[this.previousPage].className = this.pages[this.previousPage].className.replace(/(^|\s)hidden(\s|$)/g, " ");
                            this.currentPageSpan.innerHTML = this.currentPage;
                            this.resultsDiv.scrollIntoView({
                                behavior: "smooth"
                            });
                            if (!this.hasNext()) this.nextButton.className += " hidden"
                        }
                        if (this.hasPrevious()) this.prevButton.className = this.prevButton.className.replace(/(^|\s)hidden(\s|$)/g, " ")
                    },
                    prev: function() {
                        event.preventDefault();
                        if (this.hasPrevious()) {
                            this.currentPage = this.previousPage;
                            this.previousPage = this.previousPage - 1;
                            this.nextPage = this.currentPage + 1;
                            this.setButtons();
                            this.setCanonical();
                            this.pages[this.currentPage].className += " hidden";
                            this.pages[this.previousPage].className = this.pages[this.previousPage].className.replace(/(^|\s)hidden(\s|$)/g, " ");
                            this.currentPageSpan.innerHTML = this.currentPage;
                            this.resultsDiv.scrollIntoView({
                                behavior: "smooth"
                            });
                            if (!this.hasPrevious()) this.prevButton.className += " hidden"
                        }
                        if (this.hasNext()) this.nextButton.className = this.nextButton.className.replace(/(^|\s)hidden(\s|$)/g,
                            " ")
                    },
                    hasNext: function() {
                        return this.nextPage <= this.totalPages
                    },
                    hasPrevious: function() {
                        return this.previousPage > 0
                    },
                    createResults: function(id, data) {
                        var container = document.createElement("div");
                        container.setAttribute("data-page-num", id);
                        container.className = "hidden rl__container";
                        var insides = "";
                        for (var i = 0, l = data.length; i < l; i++) {
                            var fullLink = '\x3ca class\x3d"rl__link--full" href\x3d"[[item.pageUrl]]" aria-hidden\x3d"true" title\x3d"[[item.pageTitle]]"\x3e\x3c/a\x3e';
                            var figure = '\x3cfigure class\x3d"rl__figure rl__figure--' +
                                this.imageVariant + '"\x3e' + this.getImage(this.imageVariant === "rectangle" ? data[i].rectangleImage : data[i].squareImage) + "\x3c/figure\x3e";
                            var article = '\x3carticle class\x3d"rl__article" \x3e' + '\x3ch2 class\x3d"rl__title" \x3e\x3ca href\x3d"[[item.pageUrl]]" class\x3d"rl__link--title"\x3e[[item.pageTitle]]\x3c/a\x3e\x3c/h2\x3e' + '\x3cp class\x3d"rl__description"\x3e[[item.pageDescription]]\x3c/p\x3e' + "\x3c/article\x3e";
                            var button = '\x3ca class\x3d"rl__button button--teal" href\x3d"[[item.pageUrl]]" data-link-type\x3d"button" data-name\x3d"Read More" title\x3d"[[item.pageTitle]]"\x3eRead More\x3c/a\x3e';
                            var grouping = '\x3cdiv class\x3d"rl__div--grouping"\x3e' + article + (this.hasButton === "true" ? button : "") + "\x3c/div\x3e";
                            var remainder = (i + this.resultsPerPage) % 2;
                            var oddOrEven = remainder !== 0 && remainder !== -0 ? "rl__row--even" : "rl__row--odd";
                            var div = '\x3cdiv class\x3d"rl__row rl__row--vertical [[item.oddOrEven]]" data-s-subregion-id\x3d"Grid ' + (i + 1) + " of " + data.length + '"\x3e' + fullLink + figure + grouping + "\x3c/div\x3e";
                            div = div.replace(/\[\[item\.pageUrl\]\]/g, data[i].pageUrl).replace(/\[\[item\.pageTitle\]\]/g, data[i].pageTitle).replace(/\[\[item\.oddOrEven\]\]/g,
                                oddOrEven).replace(/\[\[item\.pageDescription\]\]/g, data[i].pageDescription);
                            insides += div
                        }
                        container.innerHTML = insides;
                        return container
                    },
                    getImage: function(o) {
                        var image = '\x3cimg class\x3d"rl__image"' + 'src\x3d"' + (o.mobileRenditionUrl ? o.mobileRenditionUrl : o.originalImage) + '"' + 'srcset\x3d"' + (o.mobileRenditionUrl !== "" ? o.mobileRenditionUrl + " 360w," : "") + (o.tabletRenditionUrl !== "" ? o.tabletRenditionUrl + " 768w," : "") + (o.tabletRetinaRenditionUrl !== "" ? o.tabletRetinaRenditionUrl + " 993w," : "") + o.originalImage + " " +
                            o.originalSize + 'w"' + ' sizes\x3d"' + (this.imageVariant === "rectangle" ? this.verticalRectangleSizes : this.verticalSquareSizes) + '" ' + (o.alt !== "" && o.alt !== null ? 'alt\x3d"' + o.alt + '"' : "") + ' width\x3d"' + o.originalSize + '" /\x3e';
                        return image
                    },
                    setup: function(o) {
                        this.totalPages = o.totalPages ? o.totalPages : 0;
                        this.totalResults = o.totalResults ? o.totalResults : 0;
                        if (typeof o.results !== "undefined" && this.totalPages > 1) {
                            this.results = o.results;
                            this.loadedTotalResults = this.results.length;
                            var docFrag = document.createDocumentFragment();
                            var container = this.createResults(this.nextPage, o.results);
                            docFrag.appendChild(container);
                            this.resultsDiv.appendChild(docFrag);
                            this.pages.push(container);
                            var obj = this;
                            if (this.paginationDiv) {
                                if (this.paginationDiv.querySelector(".rl__pages")) this.paginationDiv.querySelector(".rl__pages").textContent = this.totalPages;
                                this.nextButton.addEventListener("click", function() {
                                    obj.next()
                                });
                                this.prevButton.addEventListener("click", function() {
                                    window.history.back();
                                    obj.prev()
                                });
                                this.paginationDiv.className = this.paginationDiv.className.replace(/(^|\s)hidden(\s|$)/g,
                                    " ")
                            }
                        }
                        if (this.totalPages > 1 && this.urlSupport && this.paginationDiv) {
                            this.setButtons();
                            if (this.totalPages > 1) this.setCanonical();
                            window.addEventListener("popstate", function() {
                                obj.popState(event)
                            })
                        }
                    },
                    popState: function() {
                        try {
                            const url = new URL(window.location);
                            let page = parseInt(url.searchParams.get("page"));
                            if (page === this.nextPage) this.next(true);
                            else if (page === this.previousPage || isNaN(page)) this.prev()
                        } catch (e) {
                            console.error(e.message)
                        }
                    },
                    error: function() {
                        console.error("error")
                    }
                };
                loadFirstAdditionalResults(obj)
            } catch (e) {
                console.log("error");
                console.error(e.message)
            }
        }

    function loadFirstAdditionalResults(obj) {
        try {
            var searchParam = obj.resultsDiv.getAttribute("data-cmp");
            var cntnt = window.location.search.match(/(\?|&)cntnt=([a-zA-Z0-9\-_\/]+)($|&)/);
            var resultsPath = obj.resultsPath === "" ? (/^\/_jcr/.test(cntnt[2]) ? "" : "/us") + cntnt[2] : obj.resultsPath;
            $.ajax({
                dataType: "json",
                crossDomain: false,
                type: "GET",
                obj: obj,
                url: resultsPath + ".results.json/" + obj.currentPage + ".json",
                success: function(data) {
                    console.log("success");
                    this.obj.setup(data)
                },
                error: obj.error
            })
        } catch (e) {
            console.log("error in loadadditionalresults");
            console.error(e.message)
        }
    }
})();
(function() {
    var date = new Date;
    var timestamp = date.getTime();
    var emailSaved = "";
    var considSaved = "";
    var personalMinutes = 0;
    var envTest = document.querySelectorAll(".bts-minutes-author");
    var ele = document.querySelector(".btsminutes");
    if (typeof envTest !== "undefined" && envTest !== null && envTest.length === 0 && ele !== null && typeof ele !== "undefined") jQuery(document).ready(function() {
        enableFormValidation(".btsminutes form[name\x3dminForm], .btsminutes form[name\x3duserForm]", "html5, logic");
        getGrandTotal();
        if (Cookies.get("100days_email") ==
            undefined) {
            Cookies.set("100days_email", "anon@" + timestamp + ".com", {
                expires: 365,
                path: ""
            });
            Cookies.set("100days_consid", "a" + timestamp, {
                expires: 365,
                path: ""
            })
        }
        emailSaved = Cookies.get("100days_email");
        considSaved = Cookies.get("100days_consid");
        personalMinutes = 0;
        if (emailSaved != undefined && emailSaved.substr(0, 4) != "anon") getPersonalTotal();
        try {
            $(".btsminutes .badgePopup").attr("href", "#badgeValues")
        } catch (e) {}
    });
    window.getGrandTotal = function() {
        jQuery.getJSON("https://qwtl0e72te.execute-api.us-west-2.amazonaws.com/Prod/stcPull?scan\x3dall\x26callback\x3d?",
            function(data) {
                var minHTML = "";
                var s = data.totals.total_minutes.toString();
                var endFmt = "";
                var countup = 8;
                while (s.length < 9) s = "0" + s;
                var initObj = setInterval(function() {
                    jQuery(".btsminutes .totalMinutes img:eq(" + countup + ")").attr("src", "/etc/clientlibs/us/clientlib-site/images/icons/bts-minute-" + s.charAt(countup) + ".jpg");
                    if (countup == 0) clearInterval(initObj);
                    countup--
                }, 200)
            })
    };

    function getPersonalTotal() {
        jQuery.getJSON("https://qwtl0e72te.execute-api.us-west-2.amazonaws.com/Prod/stcPull?cons_id\x3d" + considSaved +
            "\x26callback\x3d?",
            function(data) {
                personalMinutes = data.totals.total_minutes;
                var badgeImg = "/etc/clientlibs/us/clientlib-site/images/icons/";
                var badgeText = "";
                var badgeCnt = 0;
                switch (true) {
                    case personalMinutes <= 20:
                        badgeImg += "bronze.svg";
                        badgeCnt = 1;
                        badgeText = "Thanks! Come back and log more reading minutes to unlock Double Bronze status.";
                        break;
                    case personalMinutes <= 40:
                        badgeImg += "bronze-double.svg";
                        badgeCnt = 2;
                        badgeText = "GO! GO! GO! Every minute you log helps promote literacy and early learning!";
                        break;
                    case personalMinutes <= 60:
                        badgeImg += "bronze-triple.svg";
                        badgeCnt = 3;
                        badgeText = "Thanks! You're almost to Silver Status. Keep logging those minutes!";
                        break;
                    case personalMinutes <= 120:
                        badgeImg += "silver.svg";
                        badgeCnt = 1;
                        badgeText = "You've reached Silver status! Keep reading!";
                        break;
                    case personalMinutes <= 180:
                        badgeImg += "silver-double.svg";
                        badgeCnt = 2;
                        badgeText = "Every minute Helps U.S. Kids in need! Stay strong!";
                        break;
                    case personalMinutes <= 240:
                        badgeImg += "silver-triple.svg";
                        badgeCnt = 3;
                        badgeText = "You're almost to Gold Status! Yes! Keep reading, keep logging!";
                        break;
                    case personalMinutes <= 330:
                        badgeImg += "gold.svg";
                        badgeCnt = 1;
                        badgeText = "You're devouring books to help kids in need! Keep turning pages!";
                        break;
                    case personalMinutes <= 420:
                        badgeImg += "gold-double.svg";
                        badgeCnt = 2;
                        badgeText = "You're almost rocking the Triple Gold! Keep reading!";
                        break;
                    case personalMinutes <= 510:
                        badgeImg += "gold-triple.svg";
                        badgeCnt = 3;
                        badgeText = "You're a reading machine. One more level to go!";
                        break;
                    case personalMinutes > 510:
                        badgeImg += "black.svg";
                        badgeCnt = 1;
                        badgeText = "The kids say THANKS! You've reached the highest level - and are helping change the story - and future for kids in need.";
                        break
                }
                var img = new Image;
                img.src = badgeImg;
                img.onload = function() {
                    jQuery(".btsminutes .badgeImg").attr("src", badgeImg)
                };
                jQuery(".btsminutes .badgeText").html(badgeText);
                if (personalMinutes > 0) {
                    jQuery(".btsminutes .personalMinutes").html("You've read " + formatNumber(personalMinutes) + " minutes!");
                    jQuery(".minBadge").html(personalMinutes)
                }
            })
    }
    window.restartMinutes = function() {
        jQuery(".btsminutes input[name\x3dminutes]").val("");
        jQuery(".btsminutes button[name\x3dstep1Submit],button[name\x3dstep2Submit]").html("Submit").removeAttr("disabled");
        jQuery(".btsminutes .step1").removeClass("hidden");
        jQuery(".btsminutes .step3").addClass("hidden");
        jQuery(".btsminutes .minutes").addClass("active")
    };
    jQuery(".btsminutes button[name\x3dstep1Submit]").click(function() {
        var formValid = false;
        if ($(".btsminutes input[name\x3dminutes]").val() >= 1 && $(".btsminutes input[name\x3dminutes]").val() <= 500) {
            $("#errNm1").html("");
            formValid = true
        } else {
            if ($(".btsminutes input[name\x3dminutes]").val() < 1 || $.trim($(".btsminutes input[name\x3dminutes]").val()) == "" || !/^[0-9]{1,3}$/.test($(".btsminutes input[name\x3dminutes]").val())) $("#errNm1").html("Please enter between 1 and 500 minutes");
            if ($(".btsminutes input[name\x3dminutes]").val() > 500) $("#errNm1").html("\x3cstrong class\x3d'text--white'\x3eOoops!\x3c/strong\x3e You can only enter 500 minutes per day. (That's more than 8 hours!) Come back tomorrow to enter more minutes.")
        }
        if (formValid) {
            var pushURL = "https://qwtl0e72te.execute-api.us-west-2.amazonaws.com/Prod/stcPush?minutes\x3d" + jQuery(".btsminutes input[name\x3dminutes]").val();
            if (emailSaved != undefined) {
                pushURL += "\x26email\x3d" + emailSaved;
                pushURL += "\x26cons_id\x3d" + considSaved
            }
            jQuery(".btsminutes button[name\x3dstep1Submit]").html("Saving... \x3cimg src\x3d'/etc/clientlibs/us/clientlib-site/images/icons/ajax-loader.gif'/\x3e").attr("disabled",
                "disabled");
            jQuery.getJSON(pushURL + "\x26callback\x3d?", function(data) {
                Cookies.set("100days_key", data.key, {
                    expires: 365,
                    path: ""
                });
                getGrandTotal();
                if (emailSaved != undefined && emailSaved.substr(0, 4) != "anon") {
                    jQuery(".btsminutes .badgeImg").attr("src", "");
                    getPersonalTotal();
                    jQuery(".btsminutes .step1").addClass("hidden");
                    jQuery(".btsminutes .step3").removeClass("hidden");
                    jQuery(".btsminutes .minutes").removeClass("active")
                } else {
                    jQuery(".btsminutes .step1").addClass("hidden");
                    jQuery(".btsminutes .step2").removeClass("hidden")
                }
            })
        }
    });
    jQuery(".btsminutes button[name\x3dstep2Submit]").click(function() {
        if (jQuery(".btsminutes form[name\x3duserForm]").isValid()) {
            jQuery(".btsminutes button[name\x3dstep2Submit]").html("Saving... \x3cimg src\x3d'/etc/clientlibs/us/clientlib-site/images/icons/ajax-loader.gif'/\x3e").attr("disabled", "disabled");
            var key = Cookies.get("100days_key");
            var email = jQuery(".btsminutes input[name\x3demail]").val();
            var fname = jQuery(".btsminutes input[name\x3dfirst_name]").val();
            var lname = jQuery(".btsminutes input[name\x3dlast_name]").val();
            var d = new Date;
            var datestring = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
            var pushURL = "https://qwtl0e72te.execute-api.us-west-2.amazonaws.com/Prod/stcUpdate?";
            if (emailSaved.substr(0, 4) != "anon") pushURL += "key\x3d" + key;
            else pushURL += "cons_id\x3d" + considSaved;
            pushURL += "\x26first_name\x3d" + fname;
            pushURL += "\x26last_name\x3d" + lname;
            pushURL += "\x26primary_email\x3d" + email;
            pushURL += "\x26origin_source\x3d" + escape("Web|Direct||||" + datestring);
            jQuery.getJSON(pushURL + "\x26callback\x3d?", function(data) {
                if (data.status ==
                    "error") {
                    considSaved = "9999";
                    jQuery(".btsminutes .badgeImg").attr("src", "");
                    getPersonalTotal();
                    jQuery(".btsminutes .step2").addClass("hidden");
                    jQuery(".btsminutes .step3").removeClass("hidden");
                    jQuery(".btsminutes .minutes").removeClass("active")
                } else {
                    var postURL = "https://files.savethechildren.org/backtoschool/postToSurvey.php?";
                    postURL += "cons_id\x3d" + data.cons_id;
                    postURL += "\x26first_name\x3d" + fname;
                    postURL += "\x26last_name\x3d" + lname;
                    postURL += "\x26primary_email\x3d" + email;
                    jQuery.getJSON(postURL + "\x26callback\x3d?");
                    Cookies.set("100days_email", email, {
                        expires: 365,
                        path: ""
                    });
                    Cookies.set("100days_consid", data.cons_id, {
                        expires: 365,
                        path: ""
                    });
                    emailSaved = email;
                    considSaved = data.cons_id;
                    jQuery(".btsminutes .badgeImg").attr("src", "");
                    getPersonalTotal();
                    jQuery(".btsminutes .step2").addClass("hidden");
                    jQuery(".btsminutes .step3").removeClass("hidden");
                    jQuery(".btsminutes .minutes").removeClass("active")
                }
            })
        }
    });

    function formatNumber(nStr) {
        nStr += "";
        x = nStr.split(".");
        x1 = x[0];
        x2 = x.length > 1 ? "." + x[1] : "";
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) x1 =
            x1.replace(rgx, "$1" + "," + "$2");
        return x1 + x2
    }
})();
(function() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let orientation = width >= height ? "landscape" : "portrait";
    let videos = document.querySelectorAll(".parallax-video video");
    const iOSRegex = new RegExp("iPad|iPhone|iPod");
    const iOS = iOSRegex.test(navigator.platform) || iOSRegex.test(navigator.userAgent);
    videos.forEach(video => {
        let portraitVideo = video.getAttribute("data-video-portrait");
        let landscapeVideo = video.getAttribute("data-video-landscape");
        let portraitImage = video.getAttribute("data-placeholder-portrait");
        let landscapeImage = video.getAttribute("data-placeholder-landscape");
        let videoFile;
        if (orientation == "landscape" && landscapeVideo) {
            if (landscapeImage) video.poster = landscapeImage;
            videoFile = landscapeVideo
        } else if (orientation == "portrait" && portraitVideo) {
            if (portraitImage) video.poster = portraitImage;
            videoFile = portraitVideo
        } else if (landscapeVideo || portraitVideo) {
            if (landscapeImage) video.poster = landscapeImage;
            else if (portraitImage) video.poster = portraitImage;
            videoFile = landscapeVideo || portraitVideo
        }
        if (videoFile &&
            !iOS) {
            let myRequest = new Request(videoFile);
            fetch(myRequest).then(response => response.blob()).then(function(myBlob) {
                let objectURL = URL.createObjectURL(myBlob);
                video.src = objectURL;
                let parallaxParent = video.parentElement.parentElement;
                let parallaxItem = parallax(parallaxParent);
                parallaxItem.onResize();
                window.addEventListener("scroll", function() {
                    parallaxItem.onScroll()
                });
                window.addEventListener("resize", function() {
                    parallaxItem.onResize()
                });
                window.addEventListener("load", function() {
                    parallaxItem.setOffset()
                });
                video.addEventListener("ended", function() {
                    URL.revokeObjectURL(objectURL)
                })
            })
        } else(function(video) {
            setupPlaceholder(video)
        })(video)
    });

    function setupPlaceholder(video) {
        let parallaxParent = video.parentElement.parentElement;
        let parallaxItem = parallax(parallaxParent);
        parallaxItem.onResize();
        window.addEventListener("scroll", function() {
            parallaxItem.onScroll()
        });
        window.addEventListener("resize", function() {
            parallaxItem.onResize()
        });
        window.addEventListener("load", function() {
            parallaxItem.setOffset()
        })
    }

    function parallax(obj) {
        obj.className +=
            " parallax-video-parent";
        let div = document.createElement("div");
        div.className = "parallax-video-after";
        if (obj.nextElementSibling) obj.parentElement.insertBefore(div, obj.nextElementSibling);
        else obj.parentElement.appendChild(div);
        return {
            parallaxObj: obj,
            followObj: obj.nextElementSibling,
            hideObj: obj.querySelector(".parallax-video"),
            videoObj: obj.querySelector("video"),
            videoMaxWidth: 0,
            isFixed: false,
            yOffset: obj.offsetTop,
            objHeight: obj.getBoundingClientRect().height,
            setHeight: function() {
                this.objHeight = this.videoObj.getBoundingClientRect().height
            },
            getParentOffset: function(obj) {
                let offsetValue = 0;
                while (obj.offsetParent) {
                    offsetValue += obj.offsetParent.offsetTop;
                    obj = obj.offsetParent
                }
                return offsetValue
            },
            setVideoMaxWidth: function() {
                this.videoMaxWidth = this.parallaxObj.parentElement.getBoundingClientRect().width
            },
            setOffset: function() {
                if (this.isFixed) this.yOffset = this.followObj.offsetTop + this.getParentOffset(this.followObj);
                else this.yOffset = this.parallaxObj.offsetTop + this.getParentOffset(this.parallaxObj)
            },
            onScroll: function() {
                let scrollTop = window.pageYOffset;
                if (scrollTop >= this.yOffset) {
                    if (!this.isFixed) {
                        this.setHeight();
                        this.isFixed = true;
                        this.parallaxObj.className += " parallax-fixed";
                        this.followObj.style.height = this.objHeight + "px";
                        this.videoObj.style.maxWidth = this.videoMaxWidth + "px"
                    }
                    let diff = scrollTop - this.yOffset;
                    this.hideObj.style.height = diff < this.objHeight ? this.objHeight - diff + "px" : "0px"
                } else if (scrollTop < this.yOffset && this.isFixed) {
                    this.isFixed = false;
                    this.parallaxObj.className = this.parallaxObj.className.replace(/\sparallax-fixed/, "");
                    this.followObj.style.height =
                        "0px";
                    this.hideObj.style.height = "";
                    this.videoObj.style.maxWidth = ""
                }
            },
            onResize: function() {
                this.setVideoMaxWidth();
                this.setHeight();
                this.setOffset();
                this.onScroll();
                if (this.isFixed) this.videoObj.style.maxWidth = this.videoMaxWidth + "px"
            }
        }
    }
})();
(function() {
    let carousels = document.querySelectorAll(".carousel");
    carousels.forEach(carousel => {
        try {
            let carouselItem = buildCarousel(carousel);
            if (carouselItem !== null) {
                carouselItem.previousButton.addEventListener("click", function() {
                    carouselItem.previousClick()
                });
                carouselItem.nextButton.addEventListener("click", function() {
                    carouselItem.nextClick()
                });
                for (var i = 0, l = carouselItem.indicators.length; i < l; i++)(function() {
                    var index = i;
                    carouselItem.indicators[i].addEventListener("click", function() {
                        carouselItem.indicatorClick(index)
                    })
                })();
                carouselItem.carousel.addEventListener("touchstart", function(e) {
                    carouselItem.touchStart(e)
                });
                carouselItem.carousel.addEventListener("touchend", function(e) {
                    carouselItem.touchEnd(e)
                });
                carouselItem.carousel.addEventListener("touchcancel", function(e) {
                    carouselItem.touchCancel(e)
                })
            }
        } catch (e) {
            console.log(e.message)
        }
    });

    function buildCarousel(carousel) {
        let previousButton = carousel.querySelector(".carousel__action--previous");
        let nextButton = carousel.querySelector(".carousel__action--next");
        let slides = carousel.querySelectorAll(".carousel__slide");
        let indicators = carousel.querySelectorAll(".carousel__indicator");
        let carouselObject = {
            carousel: carousel,
            previousButton: previousButton,
            nextButton: nextButton,
            slides: slides,
            indicators: indicators,
            activePosition: 0,
            lastSlidePosition: slides.length - 1,
            SLIDEACTIVE: "carousel__slide--active",
            INDICATORACTIVE: "carousel__indicator--active",
            touchActive: false,
            touchX: 0,
            previousClick: function() {
                if (this.activePosition === 0) {
                    this.slides[0].classList.remove(this.SLIDEACTIVE);
                    this.slides[this.lastSlidePosition].classList.add(this.SLIDEACTIVE);
                    this.indicators[0].classList.remove(this.INDICATORACTIVE);
                    this.indicators[this.lastSlidePosition].classList.add(this.INDICATORACTIVE);
                    this.activePosition = this.lastSlidePosition
                } else {
                    let newPosition = this.activePosition - 1;
                    this.slides[this.activePosition].classList.remove(this.SLIDEACTIVE);
                    this.slides[newPosition].classList.add(this.SLIDEACTIVE);
                    this.indicators[this.activePosition].classList.remove(this.INDICATORACTIVE);
                    this.indicators[newPosition].classList.add(this.INDICATORACTIVE);
                    this.activePosition =
                        newPosition
                }
            },
            nextClick: function() {
                if (this.activePosition === this.lastSlidePosition) {
                    this.slides[this.activePosition].classList.remove(this.SLIDEACTIVE);
                    this.slides[0].classList.add(this.SLIDEACTIVE);
                    this.indicators[this.activePosition].classList.remove(this.INDICATORACTIVE);
                    this.indicators[0].classList.add(this.INDICATORACTIVE);
                    this.activePosition = 0
                } else {
                    let newPosition = this.activePosition + 1;
                    this.slides[this.activePosition].classList.remove(this.SLIDEACTIVE);
                    this.slides[newPosition].classList.add(this.SLIDEACTIVE);
                    this.indicators[this.activePosition].classList.remove(this.INDICATORACTIVE);
                    this.indicators[newPosition].classList.add(this.INDICATORACTIVE);
                    this.activePosition = newPosition
                }
            },
            indicatorClick: function(i) {
                let newPosition = i;
                if (newPosition !== this.activePosition) {
                    this.slides[this.activePosition].classList.remove(this.SLIDEACTIVE);
                    this.slides[newPosition].classList.add(this.SLIDEACTIVE);
                    this.indicators[this.activePosition].classList.remove(this.INDICATORACTIVE);
                    this.indicators[newPosition].classList.add(this.INDICATORACTIVE);
                    this.activePosition = newPosition
                }
            },
            touchStart: function(e) {
                this.touchActive = true;
                this.touchX = e.touches[0].clientX
            },
            touchEnd: function(e) {
                if (this.touchActive) {
                    let difference = e.changedTouches[0].clientX - this.touchX;
                    if (difference > 30) this.nextClick();
                    else if (difference < -30) this.previousClick()
                }
                this.touchActive = false
            },
            touchCancel: function() {
                this.touchActive = false
            }
        };
        return previousButton === null ? null : carouselObject
    }
})();
(function(d, s, id) {
    var js;
    var em = d.querySelector(".embed--twitter");
    if (em && !d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.async = "";
        js.src = "https://platform.twitter.com/widgets.js";
        d.body.appendChild(js)
    }
})(document, "script", "twitter-wjs");
(function() {
    class Accordion {
        constructor(accordionContainer) {
            this.container = accordionContainer;
            this.trigger = this.container.querySelector(".accordion-trigger");
            this.panel = this.container.querySelector(".accordion-content");
            this.open = this.trigger.getAttribute("aria-expanded") === "true";
            this.trigger.addEventListener("click", this.onTriggerClick.bind(this))
        }
        onTriggerClick() {
            this.toggle(!this.open)
        }
        toggle(open) {
            if (open === this.open) return;
            this.open = open;
            this.trigger.setAttribute("aria-expanded", this.open.toString());
            if (open) this.panel.removeAttribute("hidden");
            else this.panel.setAttribute("hidden", "")
        }
    }
    let accordions = document.querySelectorAll(".accordion-container");
    accordions.forEach(accordionContainer => {
        new Accordion(accordionContainer)
    })
})();