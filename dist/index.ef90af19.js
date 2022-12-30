// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"A6Toh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "17fc91c2ef90af19";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"74QIH":[function(require,module,exports) {
var _lib = require("../lib");
const $output = document.querySelector("#terminal-output");
document.querySelector("#terminal-input").addEventListener("input", (e)=>{
    const selector = e.target.value;
    const translations = (0, _lib.translate)(selector);
    const compiled = translations.length > 0 ? "<div>" + translations.map((translation)=>{
        const output = "Come\xe7ando do lado direito, temos: " + translation.to;
        return `<p class="selector-intro">Analisando o seletor <code>${translation.from}</code>...</p>` + compileSimpleMarkdown(escape(output)) + "</div>";
    }).join("<div>") : "";
    $output.innerHTML = compiled;
});
function compileSimpleMarkdown(markdown) {
    return markdown.replace(/\`(.*?)\`/g, "<code>$1</code>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/(.+?)(\n|$)+/g, "<p>$1</p>");
}
function escape(html) {
    return html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

},{"../lib":"kShel"}],"kShel":[function(require,module,exports) {
const { translate  } = require("4b468efac0e90be");
module.exports = {
    translate
};

},{"4b468efac0e90be":"lbqvS"}],"lbqvS":[function(require,module,exports) {
const CSSwhat = require("c13662efb7b3c987");
const { translateComplexSelector  } = require("7102727194583f8e");
const translate = (selector)=>{
    if (!selector) return [];
    const selectorList = CSSwhat.parse(selector);
    return selectorList.map((tokens)=>({
            from: CSSwhat.stringify([
                tokens
            ]),
            to: translateComplexSelector(tokens)
        }));
};
module.exports = {
    translate
};

},{"c13662efb7b3c987":"hg0IC","7102727194583f8e":"80xBW"}],"hg0IC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isTraversal", ()=>(0, _parse.isTraversal));
parcelHelpers.export(exports, "parse", ()=>(0, _parse.parse));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringify.stringify));
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);
var _parse = require("./parse");
var _stringify = require("./stringify");

},{"./types":"8d0L9","./parse":"4yhwG","./stringify":"cEzyV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8d0L9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SelectorType", ()=>SelectorType);
parcelHelpers.export(exports, "IgnoreCaseMode", ()=>IgnoreCaseMode);
parcelHelpers.export(exports, "AttributeAction", ()=>AttributeAction);
var SelectorType;
(function(SelectorType) {
    SelectorType["Attribute"] = "attribute";
    SelectorType["Pseudo"] = "pseudo";
    SelectorType["PseudoElement"] = "pseudo-element";
    SelectorType["Tag"] = "tag";
    SelectorType["Universal"] = "universal";
    // Traversals
    SelectorType["Adjacent"] = "adjacent";
    SelectorType["Child"] = "child";
    SelectorType["Descendant"] = "descendant";
    SelectorType["Parent"] = "parent";
    SelectorType["Sibling"] = "sibling";
    SelectorType["ColumnCombinator"] = "column-combinator";
})(SelectorType || (SelectorType = {}));
const IgnoreCaseMode = {
    Unknown: null,
    QuirksMode: "quirks",
    IgnoreCase: true,
    CaseSensitive: false
};
var AttributeAction;
(function(AttributeAction) {
    AttributeAction["Any"] = "any";
    AttributeAction["Element"] = "element";
    AttributeAction["End"] = "end";
    AttributeAction["Equals"] = "equals";
    AttributeAction["Exists"] = "exists";
    AttributeAction["Hyphen"] = "hyphen";
    AttributeAction["Not"] = "not";
    AttributeAction["Start"] = "start";
})(AttributeAction || (AttributeAction = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4yhwG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Checks whether a specific selector is a traversal.
 * This is useful eg. in swapping the order of elements that
 * are not traversals.
 *
 * @param selector Selector to check.
 */ parcelHelpers.export(exports, "isTraversal", ()=>isTraversal);
/**
 * Parses `selector`, optionally with the passed `options`.
 *
 * @param selector Selector to parse.
 * @param options Options for parsing.
 * @returns Returns a two-dimensional array.
 * The first dimension represents selectors separated by commas (eg. `sub1, sub2`),
 * the second contains the relevant tokens for that selector.
 */ parcelHelpers.export(exports, "parse", ()=>parse);
var _types = require("./types");
const reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
const reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
const actionTypes = new Map([
    [
        126 /* Tilde */ ,
        (0, _types.AttributeAction).Element
    ],
    [
        94 /* Circumflex */ ,
        (0, _types.AttributeAction).Start
    ],
    [
        36 /* Dollar */ ,
        (0, _types.AttributeAction).End
    ],
    [
        42 /* Asterisk */ ,
        (0, _types.AttributeAction).Any
    ],
    [
        33 /* ExclamationMark */ ,
        (0, _types.AttributeAction).Not
    ],
    [
        124 /* Pipe */ ,
        (0, _types.AttributeAction).Hyphen
    ]
]);
// Pseudos, whose data property is parsed as well.
const unpackPseudos = new Set([
    "has",
    "not",
    "matches",
    "is",
    "where",
    "host",
    "host-context"
]);
function isTraversal(selector) {
    switch(selector.type){
        case (0, _types.SelectorType).Adjacent:
        case (0, _types.SelectorType).Child:
        case (0, _types.SelectorType).Descendant:
        case (0, _types.SelectorType).Parent:
        case (0, _types.SelectorType).Sibling:
        case (0, _types.SelectorType).ColumnCombinator:
            return true;
        default:
            return false;
    }
}
const stripQuotesFromPseudos = new Set([
    "contains",
    "icontains"
]);
// Unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L152
function funescape(_, escaped, escapedWhitespace) {
    const high = parseInt(escaped, 16) - 0x10000;
    // NaN means non-codepoint
    return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xd800, high & 0x3ff | 0xdc00);
}
function unescapeCSS(str) {
    return str.replace(reEscape, funescape);
}
function isQuote(c) {
    return c === 39 /* SingleQuote */  || c === 34 /* DoubleQuote */ ;
}
function isWhitespace(c) {
    return c === 32 /* Space */  || c === 9 /* Tab */  || c === 10 /* NewLine */  || c === 12 /* FormFeed */  || c === 13 /* CarriageReturn */ ;
}
function parse(selector) {
    const subselects = [];
    const endIndex = parseSelector(subselects, `${selector}`, 0);
    if (endIndex < selector.length) throw new Error(`Unmatched selector: ${selector.slice(endIndex)}`);
    return subselects;
}
function parseSelector(subselects, selector, selectorIndex) {
    let tokens = [];
    function getName(offset) {
        const match = selector.slice(selectorIndex + offset).match(reName);
        if (!match) throw new Error(`Expected name, found ${selector.slice(selectorIndex)}`);
        const [name] = match;
        selectorIndex += offset + name.length;
        return unescapeCSS(name);
    }
    function stripWhitespace(offset) {
        selectorIndex += offset;
        while(selectorIndex < selector.length && isWhitespace(selector.charCodeAt(selectorIndex)))selectorIndex++;
    }
    function readValueWithParenthesis() {
        selectorIndex += 1;
        const start = selectorIndex;
        let counter = 1;
        for(; counter > 0 && selectorIndex < selector.length; selectorIndex++){
            if (selector.charCodeAt(selectorIndex) === 40 /* LeftParenthesis */  && !isEscaped(selectorIndex)) counter++;
            else if (selector.charCodeAt(selectorIndex) === 41 /* RightParenthesis */  && !isEscaped(selectorIndex)) counter--;
        }
        if (counter) throw new Error("Parenthesis not matched");
        return unescapeCSS(selector.slice(start, selectorIndex - 1));
    }
    function isEscaped(pos) {
        let slashCount = 0;
        while(selector.charCodeAt(--pos) === 92 /* BackSlash */ )slashCount++;
        return (slashCount & 1) === 1;
    }
    function ensureNotTraversal() {
        if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) throw new Error("Did not expect successive traversals.");
    }
    function addTraversal(type) {
        if (tokens.length > 0 && tokens[tokens.length - 1].type === (0, _types.SelectorType).Descendant) {
            tokens[tokens.length - 1].type = type;
            return;
        }
        ensureNotTraversal();
        tokens.push({
            type
        });
    }
    function addSpecialAttribute(name, action) {
        tokens.push({
            type: (0, _types.SelectorType).Attribute,
            name,
            action,
            value: getName(1),
            namespace: null,
            ignoreCase: "quirks"
        });
    }
    /**
     * We have finished parsing the current part of the selector.
     *
     * Remove descendant tokens at the end if they exist,
     * and return the last index, so that parsing can be
     * picked up from here.
     */ function finalizeSubselector() {
        if (tokens.length && tokens[tokens.length - 1].type === (0, _types.SelectorType).Descendant) tokens.pop();
        if (tokens.length === 0) throw new Error("Empty sub-selector");
        subselects.push(tokens);
    }
    stripWhitespace(0);
    if (selector.length === selectorIndex) return selectorIndex;
    loop: while(selectorIndex < selector.length){
        const firstChar = selector.charCodeAt(selectorIndex);
        switch(firstChar){
            // Whitespace
            case 32 /* Space */ :
            case 9 /* Tab */ :
            case 10 /* NewLine */ :
            case 12 /* FormFeed */ :
            case 13 /* CarriageReturn */ :
                if (tokens.length === 0 || tokens[0].type !== (0, _types.SelectorType).Descendant) {
                    ensureNotTraversal();
                    tokens.push({
                        type: (0, _types.SelectorType).Descendant
                    });
                }
                stripWhitespace(1);
                break;
            // Traversals
            case 62 /* GreaterThan */ :
                addTraversal((0, _types.SelectorType).Child);
                stripWhitespace(1);
                break;
            case 60 /* LessThan */ :
                addTraversal((0, _types.SelectorType).Parent);
                stripWhitespace(1);
                break;
            case 126 /* Tilde */ :
                addTraversal((0, _types.SelectorType).Sibling);
                stripWhitespace(1);
                break;
            case 43 /* Plus */ :
                addTraversal((0, _types.SelectorType).Adjacent);
                stripWhitespace(1);
                break;
            // Special attribute selectors: .class, #id
            case 46 /* Period */ :
                addSpecialAttribute("class", (0, _types.AttributeAction).Element);
                break;
            case 35 /* Hash */ :
                addSpecialAttribute("id", (0, _types.AttributeAction).Equals);
                break;
            case 91 /* LeftSquareBracket */ :
                {
                    stripWhitespace(1);
                    // Determine attribute name and namespace
                    let name;
                    let namespace = null;
                    if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */ ) // Equivalent to no namespace
                    name = getName(1);
                    else if (selector.startsWith("*|", selectorIndex)) {
                        namespace = "*";
                        name = getName(2);
                    } else {
                        name = getName(0);
                        if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */  && selector.charCodeAt(selectorIndex + 1) !== 61 /* Equal */ ) {
                            namespace = name;
                            name = getName(1);
                        }
                    }
                    stripWhitespace(0);
                    // Determine comparison operation
                    let action = (0, _types.AttributeAction).Exists;
                    const possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
                    if (possibleAction) {
                        action = possibleAction;
                        if (selector.charCodeAt(selectorIndex + 1) !== 61 /* Equal */ ) throw new Error("Expected `=`");
                        stripWhitespace(2);
                    } else if (selector.charCodeAt(selectorIndex) === 61 /* Equal */ ) {
                        action = (0, _types.AttributeAction).Equals;
                        stripWhitespace(1);
                    }
                    // Determine value
                    let value = "";
                    let ignoreCase = null;
                    if (action !== "exists") {
                        if (isQuote(selector.charCodeAt(selectorIndex))) {
                            const quote = selector.charCodeAt(selectorIndex);
                            let sectionEnd = selectorIndex + 1;
                            while(sectionEnd < selector.length && (selector.charCodeAt(sectionEnd) !== quote || isEscaped(sectionEnd)))sectionEnd += 1;
                            if (selector.charCodeAt(sectionEnd) !== quote) throw new Error("Attribute value didn't end");
                            value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
                            selectorIndex = sectionEnd + 1;
                        } else {
                            const valueStart = selectorIndex;
                            while(selectorIndex < selector.length && (!isWhitespace(selector.charCodeAt(selectorIndex)) && selector.charCodeAt(selectorIndex) !== 93 /* RightSquareBracket */  || isEscaped(selectorIndex)))selectorIndex += 1;
                            value = unescapeCSS(selector.slice(valueStart, selectorIndex));
                        }
                        stripWhitespace(0);
                        // See if we have a force ignore flag
                        const forceIgnore = selector.charCodeAt(selectorIndex) | 0x20;
                        // If the forceIgnore flag is set (either `i` or `s`), use that value
                        if (forceIgnore === 115 /* LowerS */ ) {
                            ignoreCase = false;
                            stripWhitespace(1);
                        } else if (forceIgnore === 105 /* LowerI */ ) {
                            ignoreCase = true;
                            stripWhitespace(1);
                        }
                    }
                    if (selector.charCodeAt(selectorIndex) !== 93 /* RightSquareBracket */ ) throw new Error("Attribute selector didn't terminate");
                    selectorIndex += 1;
                    const attributeSelector = {
                        type: (0, _types.SelectorType).Attribute,
                        name,
                        action,
                        value,
                        namespace,
                        ignoreCase
                    };
                    tokens.push(attributeSelector);
                    break;
                }
            case 58 /* Colon */ :
                {
                    if (selector.charCodeAt(selectorIndex + 1) === 58 /* Colon */ ) {
                        tokens.push({
                            type: (0, _types.SelectorType).PseudoElement,
                            name: getName(2).toLowerCase(),
                            data: selector.charCodeAt(selectorIndex) === 40 /* LeftParenthesis */  ? readValueWithParenthesis() : null
                        });
                        continue;
                    }
                    const name1 = getName(1).toLowerCase();
                    let data = null;
                    if (selector.charCodeAt(selectorIndex) === 40 /* LeftParenthesis */ ) {
                        if (unpackPseudos.has(name1)) {
                            if (isQuote(selector.charCodeAt(selectorIndex + 1))) throw new Error(`Pseudo-selector ${name1} cannot be quoted`);
                            data = [];
                            selectorIndex = parseSelector(data, selector, selectorIndex + 1);
                            if (selector.charCodeAt(selectorIndex) !== 41 /* RightParenthesis */ ) throw new Error(`Missing closing parenthesis in :${name1} (${selector})`);
                            selectorIndex += 1;
                        } else {
                            data = readValueWithParenthesis();
                            if (stripQuotesFromPseudos.has(name1)) {
                                const quot = data.charCodeAt(0);
                                if (quot === data.charCodeAt(data.length - 1) && isQuote(quot)) data = data.slice(1, -1);
                            }
                            data = unescapeCSS(data);
                        }
                    }
                    tokens.push({
                        type: (0, _types.SelectorType).Pseudo,
                        name: name1,
                        data
                    });
                    break;
                }
            case 44 /* Comma */ :
                finalizeSubselector();
                tokens = [];
                stripWhitespace(1);
                break;
            default:
                {
                    if (selector.startsWith("/*", selectorIndex)) {
                        const endIndex = selector.indexOf("*/", selectorIndex + 2);
                        if (endIndex < 0) throw new Error("Comment was not terminated");
                        selectorIndex = endIndex + 2;
                        // Remove leading whitespace
                        if (tokens.length === 0) stripWhitespace(0);
                        break;
                    }
                    let namespace1 = null;
                    let name2;
                    if (firstChar === 42 /* Asterisk */ ) {
                        selectorIndex += 1;
                        name2 = "*";
                    } else if (firstChar === 124 /* Pipe */ ) {
                        name2 = "";
                        if (selector.charCodeAt(selectorIndex + 1) === 124 /* Pipe */ ) {
                            addTraversal((0, _types.SelectorType).ColumnCombinator);
                            stripWhitespace(2);
                            break;
                        }
                    } else if (reName.test(selector.slice(selectorIndex))) name2 = getName(0);
                    else break loop;
                    if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */  && selector.charCodeAt(selectorIndex + 1) !== 124 /* Pipe */ ) {
                        namespace1 = name2;
                        if (selector.charCodeAt(selectorIndex + 1) === 42 /* Asterisk */ ) {
                            name2 = "*";
                            selectorIndex += 2;
                        } else name2 = getName(1);
                    }
                    tokens.push(name2 === "*" ? {
                        type: (0, _types.SelectorType).Universal,
                        namespace: namespace1
                    } : {
                        type: (0, _types.SelectorType).Tag,
                        name: name2,
                        namespace: namespace1
                    });
                }
        }
    }
    finalizeSubselector();
    return selectorIndex;
}

},{"./types":"8d0L9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cEzyV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Turns `selector` back into a string.
 *
 * @param selector Selector to stringify.
 */ parcelHelpers.export(exports, "stringify", ()=>stringify);
var _types = require("./types");
const attribValChars = [
    "\\",
    '"'
];
const pseudoValChars = [
    ...attribValChars,
    "(",
    ")"
];
const charsToEscapeInAttributeValue = new Set(attribValChars.map((c)=>c.charCodeAt(0)));
const charsToEscapeInPseudoValue = new Set(pseudoValChars.map((c)=>c.charCodeAt(0)));
const charsToEscapeInName = new Set([
    ...pseudoValChars,
    "~",
    "^",
    "$",
    "*",
    "+",
    "!",
    "|",
    ":",
    "[",
    "]",
    " ",
    "."
].map((c)=>c.charCodeAt(0)));
function stringify(selector) {
    return selector.map((token)=>token.map(stringifyToken).join("")).join(", ");
}
function stringifyToken(token, index, arr) {
    switch(token.type){
        // Simple types
        case (0, _types.SelectorType).Child:
            return index === 0 ? "> " : " > ";
        case (0, _types.SelectorType).Parent:
            return index === 0 ? "< " : " < ";
        case (0, _types.SelectorType).Sibling:
            return index === 0 ? "~ " : " ~ ";
        case (0, _types.SelectorType).Adjacent:
            return index === 0 ? "+ " : " + ";
        case (0, _types.SelectorType).Descendant:
            return " ";
        case (0, _types.SelectorType).ColumnCombinator:
            return index === 0 ? "|| " : " || ";
        case (0, _types.SelectorType).Universal:
            // Return an empty string if the selector isn't needed.
            return token.namespace === "*" && index + 1 < arr.length && "name" in arr[index + 1] ? "" : `${getNamespace(token.namespace)}*`;
        case (0, _types.SelectorType).Tag:
            return getNamespacedName(token);
        case (0, _types.SelectorType).PseudoElement:
            return `::${escapeName(token.name, charsToEscapeInName)}${token.data === null ? "" : `(${escapeName(token.data, charsToEscapeInPseudoValue)})`}`;
        case (0, _types.SelectorType).Pseudo:
            return `:${escapeName(token.name, charsToEscapeInName)}${token.data === null ? "" : `(${typeof token.data === "string" ? escapeName(token.data, charsToEscapeInPseudoValue) : stringify(token.data)})`}`;
        case (0, _types.SelectorType).Attribute:
            {
                if (token.name === "id" && token.action === (0, _types.AttributeAction).Equals && token.ignoreCase === "quirks" && !token.namespace) return `#${escapeName(token.value, charsToEscapeInName)}`;
                if (token.name === "class" && token.action === (0, _types.AttributeAction).Element && token.ignoreCase === "quirks" && !token.namespace) return `.${escapeName(token.value, charsToEscapeInName)}`;
                const name = getNamespacedName(token);
                if (token.action === (0, _types.AttributeAction).Exists) return `[${name}]`;
                return `[${name}${getActionValue(token.action)}="${escapeName(token.value, charsToEscapeInAttributeValue)}"${token.ignoreCase === null ? "" : token.ignoreCase ? " i" : " s"}]`;
            }
    }
}
function getActionValue(action) {
    switch(action){
        case (0, _types.AttributeAction).Equals:
            return "";
        case (0, _types.AttributeAction).Element:
            return "~";
        case (0, _types.AttributeAction).Start:
            return "^";
        case (0, _types.AttributeAction).End:
            return "$";
        case (0, _types.AttributeAction).Any:
            return "*";
        case (0, _types.AttributeAction).Not:
            return "!";
        case (0, _types.AttributeAction).Hyphen:
            return "|";
        case (0, _types.AttributeAction).Exists:
            throw new Error("Shouldn't be here");
    }
}
function getNamespacedName(token) {
    return `${getNamespace(token.namespace)}${escapeName(token.name, charsToEscapeInName)}`;
}
function getNamespace(namespace) {
    return namespace !== null ? `${namespace === "*" ? "*" : escapeName(namespace, charsToEscapeInName)}|` : "";
}
function escapeName(str, charsToEscape) {
    let lastIdx = 0;
    let ret = "";
    for(let i = 0; i < str.length; i++)if (charsToEscape.has(str.charCodeAt(i))) {
        ret += `${str.slice(lastIdx, i)}\\${str.charAt(i)}`;
        lastIdx = i + 1;
    }
    return ret.length > 0 ? ret + str.slice(lastIdx) : str;
}

},{"./types":"8d0L9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"80xBW":[function(require,module,exports) {
const { translateCompoundSelector  } = require("669f3d1c40e7c55a");
const { capitalize  } = require("80f9f2efffd15896");
const { isCombinator  } = require("cb792fcf5dae1fb8");
const splitByCombinator = (tokens)=>tokens.reduce(([first, ...rest], token)=>isCombinator(token) ? [
            [],
            token,
            first,
            ...rest
        ] : [
            [
                token,
                ...first
            ],
            ...rest
        ], [
        []
    ]);
const translateComplexSelector = (tokens)=>{
    const split = splitByCombinator(tokens);
    const compoundSelectors = split.map((combinatorOrTokenList, index)=>{
        if (combinatorOrTokenList instanceof Array) {
            const selectorTranslation = translateCompoundSelector(combinatorOrTokenList);
            return capitalize(selectorTranslation);
        }
        const combinatorTranslation = {
            descendant: "\xc9 **descendente**",
            sibling: "Est\xe1 **logo ap\xf3s**",
            adjacent: "Est\xe1 **imediatamente ao lado**",
            child: "\xc9 **filho direto**"
        }[combinatorOrTokenList.type];
        return `. ${combinatorTranslation} de...\n`;
    }).join("") + ".";
    return compoundSelectors;
};
module.exports = {
    splitByCombinator,
    translateComplexSelector
};

},{"669f3d1c40e7c55a":"abhpZ","80f9f2efffd15896":"etL6I","cb792fcf5dae1fb8":"aoQC8"}],"abhpZ":[function(require,module,exports) {
const { quoteCode , translateArray  } = require("13d327103e2cccf1");
const { groupTokens  } = require("7f805252c3545cd4");
const translateAttributeAction = (action, value)=>{
    const quoted = quoteCode(value);
    return ({
        equals: `**exatamente igual** ao valor ${quoted}`,
        hyphen: `**começando com, ou sendo igual ao**, valor ${quoted + "-"}`,
        any: `tendo ${quoted} em **qualquer posição**`,
        start: `**começando** com ${quoted}`,
        end: `**terminando** com o valor ${quoted}`
    })[action] ?? "";
};
const translateAttribute = (attribute)=>{
    const action = translateAttributeAction(attribute.action, attribute.value);
    return `um atributo ${quoteCode(attribute.name)}` + (action ? ` com o valor ${action}` : "");
};
const translateCompoundSelector = (tokens)=>{
    const tokenGrouping = groupTokens(tokens);
    const { classes , identifier , attributes  } = tokenGrouping;
    const identifierTranslation = identifier ? `o identificador ${quoteCode(identifier.value)}` : "";
    const classTranslation = classes.length ? (classes.length > 1 ? "as classes " : "a classe ") + translateArray(classes.map(({ value  })=>quoteCode(value))) : "";
    const attributeTranslation = translateArray(attributes.map(translateAttribute));
    return [
        "um elemento",
        tokenGrouping.element ? `do tipo ${quoteCode(tokenGrouping.element.name)}` : "de qualquer tipo",
        identifierTranslation || classTranslation || attributeTranslation ? "que tem " + translateArray([
            identifierTranslation,
            classTranslation,
            attributeTranslation
        ].filter((x)=>x)) : ""
    ].filter((x)=>x).join(" ");
};
module.exports = {
    translateAttributeAction,
    translateAttribute,
    translateCompoundSelector
};

},{"13d327103e2cccf1":"etL6I","7f805252c3545cd4":"aoQC8"}],"etL6I":[function(require,module,exports) {
const quoteCode = (code)=>"`" + code + "`";
const capitalize = (string)=>string[0].toUpperCase() + string.slice(1);
const translateArray = (array, lastSep = " e ")=>{
    if (array.length === 0) return "";
    if (array.length === 1) return array[0];
    const init = array.splice(0, array.length - 1);
    const tail = array[array.length - 1];
    return init.join(", ") + lastSep + tail;
};
module.exports = {
    quoteCode,
    capitalize,
    translateArray
};

},{}],"aoQC8":[function(require,module,exports) {
const isCombinator = (token)=>[
        "child",
        "sibling",
        "adjacent",
        "descendant"
    ].includes(token.type);
const isAttribute = (token)=>token.type === "attribute";
const isClass = (token)=>isAttribute(token) && token.name === "class" && token.action === "element";
const isIdentifier = (token)=>isAttribute(token) && token.name === "id" && token.action === "equals";
const isElement = (token)=>token.type === "tag";
const isPseudoElement = (token)=>token.type === "pseudo-element";
const getTokenGroup = (token)=>{
    if (isClass(token)) return "classes";
    if (isIdentifier(token)) return "identifier";
    if (isAttribute(token)) return "attributes";
    if (isPseudoElement(token)) return "pseudoElement";
    if (isElement(token)) return "element";
    return token.type;
};
const groupTokens = (tokens)=>tokens.reduce((grouping, token)=>{
        const group = getTokenGroup(token);
        return {
            ...grouping,
            [group]: grouping[group] instanceof Array ? [
                ...grouping[group],
                token
            ] : token
        };
    }, {
        element: null,
        pseudoElement: null,
        identifier: null,
        attributes: [],
        classes: []
    });
module.exports = {
    isCombinator,
    isAttribute,
    isClass,
    isIdentifier,
    isElement,
    isPseudoElement,
    getTokenGroup,
    groupTokens
};

},{}]},["A6Toh","74QIH"], "74QIH", "parcelRequire94c2")

//# sourceMappingURL=index.ef90af19.js.map
