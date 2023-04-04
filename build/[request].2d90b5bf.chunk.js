"use strict";
(self["webpackChunkaiinsidehub_strapi"] = self["webpackChunkaiinsidehub_strapi"] || []).push([[6750],{

/***/ 21246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95489);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__);

const cookieManagerRequests = {
  getConfig: async () => {
    return await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/config`, {
      method: "GET"
    });
  },
  updateConfig: async (data) => {
    return await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/config/update`, {
      method: "PUT",
      body: { data }
    });
  },
  getLocales: async () => {
    return await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/locales`, {
      method: "GET"
    });
  },
  getCookies: async (locale = null) => {
    return await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie/find${locale ? `?locale=${locale}` : ""}`, {
      method: "GET"
    });
  },
  createCookie: async (data) => {
    return await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie/create`, {
      method: "POST",
      body: { data }
    });
  },
  updateCookie: async (id, data) => {
    return await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie/update/${id}`, {
      method: "PUT",
      body: { data }
    });
  },
  deleteCookie: async (id) => {
    return await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie/delete/${id}`, {
      method: "DELETE"
    });
  },
  getCategories: async (locale = null) => {
    return await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie-category/find${locale ? `?locale=${locale}` : ""}`, {
      method: "GET"
    });
  },
  createCategory: async (data) => {
    return await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie-category/create`, {
      method: "POST",
      body: { data }
    });
  },
  updateCategory: async (id, data) => {
    return await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie-category/update/${id}`, {
      method: "PUT",
      body: { data }
    });
  },
  deleteCategory: async (id) => {
    return await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie-category/delete/${id}`, {
      method: "DELETE"
    });
  },
  getPopups: async (locale = null) => {
    return await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie-popup/find${locale ? `?locale=${locale}` : ""}`, {
      method: "GET"
    });
  },
  createPopup: async (data) => {
    return await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie-popup/create`, {
      method: "POST",
      body: { data }
    });
  },
  updatePopup: async (id, data) => {
    return await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie-popup/update/${id}`, {
      method: "PUT",
      body: { data }
    });
  },
  deletePopup: async (id) => {
    return await (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.request)(`/cookie-manager/cookie-popup/delete/${id}`, {
      method: "DELETE"
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cookieManagerRequests);


/***/ }),

/***/ 18738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/utils/index.js + 5 modules
var utils = __webpack_require__(34097);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js




const a = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  display: grid;
  grid-template-columns: ${({ hasSideNav: e }) => e ? "auto 1fr" : "1fr"};
`, m = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  overflow-x: hidden;
`, i = ({ sideNav: e, children: n }) => /* @__PURE__ */ react.createElement(a, { hasSideNav: Boolean(e) }, e, /* @__PURE__ */ react.createElement(m, { paddingBottom: 10 }, n));
i.defaultProps = {
  sideNav: void 0
};
i.propTypes = {
  children: prop_types.node.isRequired,
  sideNav: prop_types.node
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/keyboardKeys.js
var keyboardKeys = __webpack_require__(7801);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/KeyboardNavigable/KeyboardNavigable.js



const v = ({
  tagName: s,
  attributeName: a = "",
  ...d
}) => {
  const r = () => {
    const e = document.activeElement;
    return e ? s ? e.tagName.toLowerCase() === s : e.hasAttribute(a) : !1;
  }, l = (e) => s ? e.querySelectorAll(s) : e.querySelectorAll(`[${a}]`);
  return (0,jsx_runtime.jsx)(Box/* Box */.x, {
    onKeyDown: (e) => {
      switch (e.key) {
        case keyboardKeys/* KeyboardKeys.RIGHT */.y.RIGHT:
        case keyboardKeys/* KeyboardKeys.DOWN */.y.DOWN: {
          if (r()) {
            e.preventDefault();
            const n = document.activeElement, t = [...l(e.currentTarget)], c = t.findIndex((f) => f === n), u = c + 1 < t.length ? c + 1 : 0;
            t[u].focus();
          }
          break;
        }
        case keyboardKeys/* KeyboardKeys.LEFT */.y.LEFT:
        case keyboardKeys/* KeyboardKeys.UP */.y.UP: {
          if (r()) {
            e.preventDefault();
            const n = document.activeElement, t = [...l(e.currentTarget)], c = t.findIndex((f) => f === n), u = c - 1 > -1 ? c - 1 : t.length - 1;
            t[u].focus();
          }
          break;
        }
        case keyboardKeys/* KeyboardKeys.HOME */.y.HOME: {
          r() && (e.preventDefault(), l(e.currentTarget).item(0).focus());
          break;
        }
        case keyboardKeys/* KeyboardKeys.END */.y.END: {
          if (r()) {
            e.preventDefault();
            const n = l(e.currentTarget);
            n.item(n.length - 1).focus();
          }
          break;
        }
      }
    },
    ...d
  });
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionGroup.js







const $ = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  border-bottom: 1px solid ${({
  theme: r
}) => r.colors.neutral200};
  border-right: 1px solid ${({
  theme: r
}) => r.colors.neutral200};
  border-left: 1px solid ${({
  theme: r
}) => r.colors.neutral200};
  border-radius: 0 0 ${({
  theme: r
}) => r.borderRadius} ${({
  theme: r
}) => r.borderRadius};
`, h = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  & > * {
    & > * {
      border-radius: unset;
    }
  }

  & > * {
    border-radius: unset;
    border-right: 1px solid ${({
  theme: r
}) => r.colors.neutral200};
    border-left: 1px solid ${({
  theme: r
}) => r.colors.neutral200};
    border-bottom: 1px solid ${({
  theme: r
}) => r.colors.neutral200};
  }

  & > *:first-of-type {
    border-top: 1px solid ${({
  theme: r
}) => r.colors.neutral200};
    border-radius: ${({
  theme: r
}) => r.borderRadius} ${({
  theme: r
}) => r.borderRadius} 0 0;
    & > * {
      border-radius: ${({
  theme: r
}) => r.borderRadius} ${({
  theme: r
}) => r.borderRadius} 0 0;
    }

    &:hover {
      border-top: 1px solid ${({
  theme: r
}) => r.colors.primary600};
    }
  }

  & [data-strapi-expanded='true'] {
    border: 1px solid ${({
  theme: r
}) => r.colors.primary600};
  }

  ${({
  theme: r,
  footer: d
}) => `
    &:not(${d}) {
      & > *:last-of-type {
        border-radius: 0 0 ${r.borderRadius} ${r.borderRadius};
      }
    }
  `}
`, x = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  svg path {
    fill: ${({
  theme: r
}) => r.colors.neutral500};
  }
`, C = ({
  children: r,
  footer: d,
  label: i,
  labelAction: a,
  error: s
}) => {
  const c = react.Children.toArray(r).map((u) => react.cloneElement(u, {
    hasErrorMessage: !1
  }));
  return (0,jsx_runtime.jsxs)(v, {
    attributeName: "data-strapi-accordion-toggle",
    children: [i && (0,jsx_runtime.jsxs)(Flex/* Flex */.k, {
      paddingBottom: 1,
      children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, {
        variant: "pi",
        as: "label",
        textColor: "neutral800",
        fontWeight: "bold",
        children: i
      }), a && (0,jsx_runtime.jsx)(x, {
        paddingLeft: 1,
        children: a
      })]
    }), (0,jsx_runtime.jsx)(h, {
      footer: d,
      children: c
    }), d && (0,jsx_runtime.jsx)($, {
      children: d
    }), s && (0,jsx_runtime.jsx)(Box/* Box */.x, {
      paddingTop: 1,
      children: (0,jsx_runtime.jsx)(Typography/* Typography */.Z, {
        variant: "pi",
        textColor: "danger600",
        children: s
      })
    })]
  });
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/EmptyStateLayout/EmptyStateLayout.js





const l = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`, c = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  svg {
    height: ${88 / 16}rem;
  }
`, EmptyStateLayout_a = ({ icon: n, content: i, action: p, hasRadius: d, shadow: m }) => /* @__PURE__ */ react.createElement(l, { padding: 11, background: "neutral0", hasRadius: d, shadow: m }, /* @__PURE__ */ react.createElement(c, { paddingBottom: 6, "aria-hidden": !0 }, n), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "p", textColor: "neutral600" }, i)), p);
EmptyStateLayout_a.defaultProps = {
  action: void 0,
  hasRadius: !0,
  shadow: "tableShadow"
};
EmptyStateLayout_a.propTypes = {
  action: prop_types.node,
  content: prop_types.string.isRequired,
  hasRadius: prop_types.bool,
  icon: prop_types.node.isRequired,
  shadow: prop_types.string
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/TFooter.js
var TFooter = __webpack_require__(49386);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/components.js
var components = __webpack_require__(81318);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Select/constants.js
const constants_o = {
  Keyboard: "down:keyboard",
  Mouse: "down:mouse"
}, constants_e = { Keyboard: "up:keyboard", Mouse: "up:mouse" };


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Select/hooks/useButtonRef.js


const useButtonRef_m = (t) => {
  const u = (0,react.useRef)(null), o = (0,react.useRef)(null), r = (0,react.useRef)();
  return t && (r.current = t), (0,react.useEffect)(() => {
    !o.current || t || (r.current === constants_o.Keyboard || r.current === constants_e.Keyboard) && u.current.focus();
  }, [t]), (0,react.useEffect)(() => {
    o.current = !0;
  }, []), u;
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Select/SelectButton.js





const SelectButton_m = styled_components_browser_esm["default"].button`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  background: transparent;
  border: none;

  // The focus state is moved to the parent thanks to :focus-within
  &:focus {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`, SelectButton_a = (0,react.forwardRef)(({ labelledBy: s, expanded: d, onTrigger: r, disabled: n, ...l }, i) => {
  const p = (o) => {
    if (!n)
      switch (o.key) {
        case keyboardKeys/* KeyboardKeys.DOWN */.y.DOWN:
        case keyboardKeys/* KeyboardKeys.SPACE */.y.SPACE:
        case keyboardKeys/* KeyboardKeys.ENTER */.y.ENTER: {
          o.preventDefault(), r(constants_o.Keyboard);
          break;
        }
        case keyboardKeys/* KeyboardKeys.UP */.y.UP: {
          o.preventDefault(), r(constants_e.Keyboard);
          break;
        }
      }
  };
  return /* @__PURE__ */ react.createElement(
    SelectButton_m,
    {
      ref: i,
      "aria-labelledby": s,
      "aria-haspopup": "listbox",
      "aria-expanded": d,
      onKeyDown: p,
      "aria-disabled": n,
      type: "button",
      ...l
    }
  );
});
SelectButton_a.displayName = "SelectButton";
SelectButton_a.defaultProps = {
  expanded: !1,
  disabled: !1
};
SelectButton_a.propTypes = {
  disabled: prop_types.bool,
  expanded: prop_types.bool,
  labelledBy: prop_types.string.isRequired,
  onTrigger: prop_types.func.isRequired
};


// EXTERNAL MODULE: ./node_modules/compute-scroll-into-view/dist/index.mjs
var compute_scroll_into_view_dist = __webpack_require__(70389);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Select/utils.js

const utils_d = (e, t) => {
  e.setAttribute("aria-activedescendant", t.getAttribute("id")), e.querySelectorAll('[role="option"]').forEach((c) => c.classList.remove("is-focused")), t.classList.add("is-focused"), (0,compute_scroll_into_view_dist/* default */.Z)(t, {
    scrollMode: "if-needed",
    block: "nearest",
    inline: "nearest"
  }).forEach(({ el: c, top: o, left: s }) => {
    c.scrollTop = o, c.scrollLeft = s;
  });
}, utils_l = (e) => {
  const t = e.getAttribute("aria-activedescendant");
  return e.querySelector(`#${t}`);
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Select/hooks/useListRef.js



const useListRef_y = (r) => {
  const e = (0,react.useRef)(null);
  return (0,react.useEffect)(() => {
    e.current.focus();
  }, []), (0,react.useEffect)(() => {
    if (!e.current)
      return;
    const n = e.current.querySelector('[aria-selected="true"]'), o = e.current.querySelectorAll('[role="option"]');
    let t;
    n ? t = n : r === constants_e.Keyboard ? t = o[o.length - 1] : r === constants_o.Keyboard && (t = o[0]), t && (r === constants_e.Keyboard || r === constants_o.Keyboard) && utils_d(e.current, t);
  }, []), e;
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Select/SelectList.js







const SelectList_m = ({ labelledBy: g, onSelectItem: p, children: y, multi: d, onEscape: a, expanded: A }) => {
  const e = useListRef_y(A), D = (o) => {
    switch (o.key) {
      case keyboardKeys/* KeyboardKeys.ESCAPE */.y.ESCAPE: {
        o.stopPropagation(), a();
        break;
      }
      case keyboardKeys/* KeyboardKeys.DOWN */.y.DOWN: {
        o.preventDefault();
        const t = utils_l(e.current);
        if (!t)
          return;
        const n = t.nextSibling;
        if (n)
          utils_d(e.current, n);
        else {
          const c = e.current.querySelectorAll('[role="option"]')[0];
          utils_d(e.current, c);
        }
        break;
      }
      case keyboardKeys/* KeyboardKeys.UP */.y.UP: {
        o.preventDefault();
        const t = utils_l(e.current);
        if (!t)
          return;
        const n = t.previousSibling;
        if (n)
          utils_d(e.current, n);
        else {
          const l = e.current.querySelectorAll('[role="option"]'), c = l[l.length - 1];
          utils_d(e.current, c);
        }
        break;
      }
      case keyboardKeys/* KeyboardKeys.SPACE */.y.SPACE:
      case keyboardKeys/* KeyboardKeys.ENTER */.y.ENTER: {
        o.preventDefault();
        const t = utils_l(e.current);
        t.getAttribute("data-opt-group") ? p(
          t.getAttribute("data-opt-group-children").split(","),
          t.getAttribute("data-opt-group")
        ) : p(t.getAttribute("data-strapi-value")), d || a();
        break;
      }
    }
  };
  return /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      as: "ul",
      gap: 1,
      direction: "column",
      alignItems: "stretch",
      role: "listbox",
      "aria-labelledby": g,
      tabIndex: -1,
      ref: e,
      onKeyDown: D,
      onBlur: a,
      "aria-multiselectable": d
    },
    y
  );
};
SelectList_m.defaultProps = {
  labelledBy: void 0,
  multi: !1
};
SelectList_m.propTypes = {
  children: prop_types.node.isRequired,
  expanded: prop_types.oneOf([constants_e.Keyboard, constants_e.Mouse, constants_o.Keyboard, constants_o.Mouse]).isRequired,
  labelledBy: prop_types.string,
  multi: prop_types.bool,
  onEscape: prop_types.func.isRequired,
  onSelectItem: prop_types.func.isRequired
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Tag/Tag.js




const Tag_x = ({
  children: r,
  icon: a,
  disabled: o = !1,
  onClick: i,
  ...e
}) => (0,jsx_runtime.jsxs)(g, {
  as: "button",
  background: o ? "neutral200" : "primary100",
  color: o ? "neutral700" : "primary600",
  paddingLeft: 3,
  paddingRight: 3,
  onClick: (l) => {
    o || !i || i(l);
  },
  "aria-disabled": o,
  disabled: o,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: o ? "neutral300" : "primary200",
  hasRadius: !0,
  height: `${32 / 16}rem`,
  gap: 2,
  ...e,
  children: [(0,jsx_runtime.jsx)(Tag_c, {
    $disabled: o,
    variant: "pi",
    fontWeight: "bold",
    as: "span",
    children: r
  }), a]
}), g = (0,styled_components_browser_esm["default"])(Flex/* Flex */.k)`
  & > svg {
    height: ${8 / 16}rem;
    width: ${8 / 16}rem;
  }

  & > svg path {
    fill: ${({
  theme: r,
  ...a
}) => a["aria-disabled"] ? r.colors.neutral600 : r.colors.primary600};
  }
`, Tag_c = (0,styled_components_browser_esm["default"])(Typography/* Typography */.Z)`
  color: inherit;
  border-right: 1px solid ${({
  theme: r,
  $disabled: a
}) => a ? r.colors.neutral300 : r.colors.primary200};
  padding-right: ${({
  theme: r
}) => r.spaces[2]};
`;


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Select/SelectTags.js






const SelectTags_c = styled_components_browser_esm["default"].div`
  margin-bottom: ${({ theme: r }) => r.spaces[1]};
`, f = (0,styled_components_browser_esm["default"])(Tag_x)`
  margin-left: ${({ theme: r }) => r.spaces[1]};
  margin-top: ${({ theme: r }) => r.spaces[1]};
`, SelectTags_l = ({ tags: r, onRemoveTag: s, disabled: p }) => /* @__PURE__ */ react.createElement(SelectTags_c, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { wrap: "wrap" }, r.map((t) => /* @__PURE__ */ react.createElement(
  f,
  {
    disabled: p,
    key: `tag-${t.value}`,
    icon: /* @__PURE__ */ react.createElement(dist.Cross, null),
    onClick: () => s(t.value),
    position: "relative",
    tabIndex: -1,
    zIndex: 1
  },
  t.label
))));
SelectTags_l.defaultProps = {
  disabled: !1,
  tags: []
};
SelectTags_l.propTypes = {
  disabled: prop_types.bool,
  onRemoveTag: prop_types.func.isRequired,
  tags: prop_types.arrayOf(
    prop_types.shape({ label: prop_types.string, value: prop_types.oneOfType([prop_types.string, prop_types.number]) })
  )
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.js
var Field = __webpack_require__(54574);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js + 1 modules
var FieldLabel = __webpack_require__(19270);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldHint.js
var FieldHint = __webpack_require__(63428);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldError.js
var FieldError = __webpack_require__(96404);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/helpers/escapeSelector.js
const escapeSelector_c = (e) => e.replace(":", "-");


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/hooks/useId.js
var useId = __webpack_require__(2504);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Popover/Popover.js + 1 modules
var Popover = __webpack_require__(81849);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/themes/sizes.js
var sizes = __webpack_require__(75228);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js

























const ve = (0,styled_components_browser_esm["default"])(Flex/* Flex */.k)`
  width: 100%;
`, z = ({
  label: d,
  labelAction: G,
  id: H,
  children: W,
  customizeContent: f,
  placeholder: y,
  onChange: v,
  value: o,
  hint: B,
  error: m,
  disabled: s,
  clearLabel: C,
  onClear: S,
  onReachEnd: N,
  multi: i,
  required: J,
  selectButtonTitle: K,
  size: Q,
  startIcon: x,
  withTags: u,
  ...U
}) => {
  const n = (0,useId/* useId */.M)(H), [h, E] = (0,react.useState)(void 0), $ = useButtonRef_m(h), R = (0,react.useRef)(null), w = `${n}-label`, b = `${n}-content`, X = typeof m == "string";
  let I;
  if (m ? I = `${n}-error` : B && (I = `${n}-hint`), u && !i)
    throw new Error('The "withTags" props can only be used when the "multi" prop is present');
  const Y = () => {
    E(void 0);
  }, Z = () => {
    s || (S(), $.current.focus());
  }, D = (t) => {
    t.preventDefault(), !s && (t.nativeEvent.which === 3 || t.nativeEvent.button === 2 || E(constants_o.Mouse));
  }, O = (t, l = !0) => {
    i ? v(o.includes(t) ? o.filter((a) => a !== t) : [...o, t]) : (v(t), l && E(void 0));
  }, L = (t) => {
    v(
      o.includes(t[0]) ? o.filter((l, a, c) => c.indexOf(l) < 0, t) : [...o, ...t]
    );
  };
  let T, F = [];
  const M = (t, l) => {
    const a = `${n}-option-${t.props.value}`, c = i ? o.includes(t.props.value) : t.props.value === o;
    return c && (u ? F.push({ label: t.props.children, value: t.props.value }) : T = t.props.children), (0,react.cloneElement)(t, {
      id: escapeSelector_c(a),
      onClick: () => O(t.props.value),
      selected: c,
      multi: i,
      isChild: l
    });
  }, V = react.Children.toArray(W).map((t) => {
    if (t.type.displayName === "OptGroup") {
      const l = `${n}-option-${t.props.label}`, a = t.props.children.every((p) => o.includes(p.props.value)), c = !a && t.props.children.some((p) => o.includes(p.props.value));
      return (0,react.cloneElement)(t, {
        id: escapeSelector_c(l),
        onClick: () => L(t.props.children.map((p) => p.props.value)),
        selected: a,
        indeterminate: c,
        multi: i,
        children: react.Children.toArray(t.props.children).map((p) => M(p, !0)),
        value: t.props.label
      });
    }
    return M(t);
  });
  return /* @__PURE__ */ react.createElement(Field/* Field */.g, { hint: B, error: m, id: n, required: J }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: d || B || X ? 1 : 0 }, d && /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, { action: G }, d), /* @__PURE__ */ react.createElement(components/* SelectButtonWrapper */.nP, { size: Q, hasError: Boolean(m), disabled: s, ref: R }, /* @__PURE__ */ react.createElement(
    SelectButton_a,
    {
      ref: $,
      labelledBy: `${n} ${w} ${b}`,
      "aria-describedby": I,
      expanded: Boolean(h),
      onTrigger: E,
      id: n,
      hasError: Boolean(m),
      disabled: s,
      onMouseDown: D,
      ...U
    }
  ), /* @__PURE__ */ react.createElement(ve, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, x && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 3, "aria-hidden": !0 }, x), u && /* @__PURE__ */ react.createElement(SelectTags_l, { tags: F, onRemoveTag: O, disabled: s }), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 4, paddingRight: 4 }, u ? /* @__PURE__ */ react.createElement(react.Fragment, null, !o || o.length === 0 ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { ellipsis: !0, id: b, textColor: "neutral600" }, y) : null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, { as: "span", id: b }, f ? f(o) : T || y, o.join(", "))) : /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { ellipsis: !0, id: b, textColor: o ? "neutral800" : "neutral600" }, f ? f(o) : T || y, i && /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, { as: "span" }, o.join(", "))))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, (i && o && o.length || !i && o) && S && /* @__PURE__ */ react.createElement(
    components/* IconBox */.zb,
    {
      as: "button",
      type: "button",
      onClick: Z,
      "aria-label": C,
      "aria-disabled": s,
      title: C
    },
    /* @__PURE__ */ react.createElement(dist.Cross, null)
  ), /* @__PURE__ */ react.createElement(
    components/* CaretBox */.AV,
    {
      paddingLeft: 3,
      "aria-hidden": !0,
      as: "button",
      type: "button",
      onMouseDown: D,
      tabIndex: -1,
      disabled: s,
      title: K
    },
    /* @__PURE__ */ react.createElement(dist.CarretDown, null)
  )))), /* @__PURE__ */ react.createElement(FieldHint/* FieldHint */.J, null), /* @__PURE__ */ react.createElement(FieldError/* FieldError */.c, null)), h && /* @__PURE__ */ react.createElement(
    Popover/* Popover */.J2,
    {
      source: R,
      spacing: 4,
      fullWidth: !0,
      intersectionId: `select-list-intersection-${n}`,
      onReachEnd: N
    },
    /* @__PURE__ */ react.createElement(
      SelectList_m,
      {
        selectId: n,
        labelledBy: d ? w : void 0,
        onEscape: Y,
        expanded: h,
        onSelectItem: (t, l) => l ? L(t) : O(t, !1),
        multi: i
      },
      V
    )
  ));
};
z.defaultProps = {
  "aria-label": void 0,
  children: [],
  clearLabel: "Clear",
  customizeContent: void 0,
  disabled: !1,
  id: void 0,
  label: void 0,
  labelAction: void 0,
  multi: !1,
  onChange() {
  },
  onClear: void 0,
  onReachEnd: void 0,
  value: void 0,
  hint: void 0,
  error: void 0,
  placeholder: "Select...",
  required: !1,
  selectButtonTitle: "Carret Down Button",
  size: "M",
  startIcon: void 0,
  withTags: !1
};
z.propTypes = {
  "aria-label": prop_types.string,
  children: prop_types.oneOfType([prop_types.arrayOf(prop_types.node), prop_types.node]),
  clearLabel: prop_types.string,
  customizeContent: prop_types.func,
  disabled: prop_types.bool,
  error: prop_types.oneOfType([prop_types.string, prop_types.bool]),
  hint: prop_types.oneOfType([prop_types.string, prop_types.bool, prop_types.node, prop_types.arrayOf(prop_types.node)]),
  id: prop_types.oneOfType([prop_types.string, prop_types.number]),
  label: prop_types.string,
  labelAction: prop_types.element,
  multi: prop_types.bool,
  onChange: prop_types.func,
  onClear: prop_types.func,
  onReachEnd: prop_types.func,
  placeholder: prop_types.string,
  required: prop_types.bool,
  selectButtonTitle: prop_types.string,
  size: prop_types.oneOf(Object.keys(sizes/* sizes.input */.J.input)),
  startIcon: prop_types.element,
  value: prop_types.oneOfType([
    prop_types.arrayOf(prop_types.oneOfType([prop_types.string, prop_types.number])),
    prop_types.string,
    prop_types.number
  ]),
  withTags: prop_types.bool
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/assets/checkmark.js
var checkmark = __webpack_require__(22392);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js







const y = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  border: 1px solid
    ${({ theme: e, selected: r, indeterminate: i }) => r || i ? e.colors.primary600 : e.colors.neutral300};
  height: 18px;
  width: 18px;
  background-color: ${({ theme: e, selected: r, indeterminate: i }) => r || i ? e.colors.primary600 : e.colors.neutral0};

  ${({ theme: e, indeterminate: r }) => r && `&::after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${e.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

  `}

  ${({ selected: e }) => e && `  
    &::after {
      content: '';
      background: url(${checkmark/* default */.Z}) no-repeat no-repeat center center;
      width: 100%;
      height: 100%;
      position: absolute;
    }

  `}
`, Option_x = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  &.is-focused {
    background: ${({ theme: e }) => e.colors.primary100};
  }

  &:hover {
    background: ${({ theme: e }) => e.colors.primary100};
  }
`, n = ({ selected: e, indeterminate: r, children: i, value: p, multi: s, isChild: c, startIcon: l, ...u }) => {
  const m = (0,react.useRef)(null);
  return /* @__PURE__ */ react.createElement(
    Option_x,
    {
      as: "li",
      hasRadius: !0,
      paddingLeft: c ? 7 : 4,
      paddingRight: 4,
      paddingTop: 2,
      paddingBottom: 2,
      ref: m,
      role: "option",
      "aria-selected": e,
      background: "neutral0",
      "data-strapi-value": p,
      ...u
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, l && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 2, "aria-hidden": !0 }, l), s && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 2, "aria-hidden": !0 }, /* @__PURE__ */ react.createElement(
      y,
      {
        hasRadius: !0,
        overflow: "hidden",
        position: "relative",
        indeterminate: r,
        selected: e,
        zIndex: 1
      }
    )), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: e ? "primary600" : "neutral800", fontWeight: e ? "bold" : null }, i))
  );
};
n.defaultProps = {
  isChild: !1,
  multi: !1,
  selected: !1,
  startIcon: void 0,
  indeterminate: !1
};
n.propTypes = {
  children: prop_types.oneOfType([prop_types.string, prop_types.number]).isRequired,
  indeterminate: prop_types.bool,
  isChild: prop_types.bool,
  multi: prop_types.bool,
  selected: prop_types.bool,
  startIcon: prop_types.node,
  value: prop_types.oneOfType([prop_types.string, prop_types.number]).isRequired
};
n.displayName = "Option";


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Cog.js

const Cog_c = (a) => /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", {
  width: "1rem",
  height: "1rem",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...a,
  children: /* @__PURE__ */ (0,jsx_runtime.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",
    fill: "#212134"
  })
}), o = Cog_c;


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/components/Illo/index.js
var Illo = __webpack_require__(84431);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/components/CookieTable/index.js + 4 modules
var CookieTable = __webpack_require__(55123);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/components/CookieModal/index.js + 11 modules
var CookieModal = __webpack_require__(59627);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/components/CategoryModal/index.js + 1 modules
var CategoryModal = __webpack_require__(13480);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var design_system_dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/components/PopupContentModal/validation.js


const ValidationSchema = (formatMessage) => {
  const msg = {
    string: {
      isRequired: formatMessage({
        id: (0,utils/* getTrad */.OB)("form.validation.string.isRequired"),
        defaultMessage: "Text cannot be empty"
      }),
      isMax: formatMessage({
        id: (0,utils/* getTrad */.OB)("form.validation.string.isMax"),
        defaultMessage: "Text is to long"
      })
    }
  };
  return lib/* object */.Ry().shape({
    title: lib/* string */.Z_().required(msg.string.isRequired).max(125, msg.string.isMax),
    description: lib/* string */.Z_().max(250, msg.string.isMax)
  });
};
/* harmony default export */ const validation = (ValidationSchema);

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/components/PopupContentModal/index.js









const PopupContentModal = ({ setShowModal, createPopup, updatePopup, popup = {}, locale = null }) => {
  console.log("Popup: ", popup);
  const { formatMessage } = (0,react_intl.useIntl)();
  const isUpdate = Object.keys(popup).length > 0;
  const [id] = (0,react.useState)(popup.id || null);
  const [title, setTitle] = (0,react.useState)(popup.title || "");
  const [description, setDescription] = (0,react.useState)(popup.description || "");
  const [titleValidation, setTitleValidation] = (0,react.useState)([]);
  const [descriptionValidation, setDescriptionValidation] = (0,react.useState)([]);
  const [isCreating, setIsCreating] = (0,react.useState)(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (await validateFields()) {
      const fields = {
        title,
        description,
        locale
      };
      try {
        isCreating ? createPopup({ ...fields }) : updatePopup({ id, ...fields });
        setShowModal(false);
      } catch (e2) {
        console.log("error", e2);
      }
    }
  };
  const handleValidation = async (field, setValueValidation) => {
    const key = Object.keys(field)[0];
    const result = await validateField(field, key);
    const isValid = (0,lodash.isNull)(result) ? [] : result;
    setValueValidation(isValid);
  };
  const validateField = async (field, key) => {
    return await validation(formatMessage).validateAt(key, field).then(() => null).catch((err) => err.errors);
  };
  const validateFields = async () => {
    const fields = {
      title,
      description
    };
    const validationSuccess = await validation(formatMessage).isValid(fields).then((valid) => valid);
    if (!validationSuccess) {
      setTitleValidation(await validateField({ title }, "title"));
      setDescriptionValidation(await validateField({ description }, "description"));
    }
    return validationSuccess;
  };
  return /* @__PURE__ */ react.createElement(
    design_system_dist.ModalLayout,
    {
      onClose: () => setShowModal(false),
      labelledBy: "title",
      as: "form",
      onSubmit: handleSubmit
    },
    /* @__PURE__ */ react.createElement(design_system_dist.ModalHeader, null, /* @__PURE__ */ react.createElement(design_system_dist.Typography, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title" }, isUpdate ? formatMessage({
      id: (0,utils/* getTrad */.OB)("modal.popup.form.header.title.update"),
      defaultMessage: "Update Popup Content"
    }) : formatMessage({
      id: (0,utils/* getTrad */.OB)("modal.popup.form.header.title.create"),
      defaultMessage: "Create new Popup Content"
    }))),
    /* @__PURE__ */ react.createElement(design_system_dist.ModalBody, null, isUpdate || isCreating ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(design_system_dist.Box, null, /* @__PURE__ */ react.createElement(
      design_system_dist.TextInput,
      {
        label: formatMessage({
          id: (0,utils/* getTrad */.OB)("modal.popup.form.field.title.label"),
          defaultMessage: "Title"
        }),
        name: "title",
        error: (0,lodash.first)(titleValidation),
        onChange: (e) => {
          handleValidation({ title: e.target.value }, setTitleValidation, titleValidation);
          setTitle(e.target.value);
        },
        value: title
      }
    )), /* @__PURE__ */ react.createElement(design_system_dist.Box, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(
      design_system_dist.Textarea,
      {
        label: formatMessage({
          id: (0,utils/* getTrad */.OB)("modal.popup.form.field.description.label"),
          defaultMessage: "Description"
        }),
        name: "description",
        error: (0,lodash.first)(descriptionValidation),
        onChange: (e) => {
          handleValidation({ description: e.target.value }, setDescriptionValidation, descriptionValidation);
          setDescription(e.target.value);
        },
        value: description
      }
    ))) : /* @__PURE__ */ react.createElement(
      EmptyStateLayout_a,
      {
        icon: /* @__PURE__ */ react.createElement(Illo/* default */.Z, null),
        content: formatMessage({
          id: (0,utils/* getTrad */.OB)("empty.popup"),
          defaultMessage: "You don't have any popup content yet..."
        }),
        action: /* @__PURE__ */ react.createElement(
          design_system_dist.Button,
          {
            startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null),
            variant: "secondary",
            onClick: () => setIsCreating(true)
          },
          formatMessage({
            id: (0,utils/* getTrad */.OB)("empty.popup.cta"),
            defaultMessage: "Add your first popup content"
          })
        ),
        shadow: "none"
      }
    )),
    /* @__PURE__ */ react.createElement(
      design_system_dist.ModalFooter,
      {
        startActions: /* @__PURE__ */ react.createElement(design_system_dist.Button, { onClick: () => setShowModal(false), variant: "tertiary" }, formatMessage({
          id: (0,utils/* getTrad */.OB)("modal.popup.form.cta.cancel"),
          defaultMessage: "Cancel"
        })),
        endActions: isUpdate ? /* @__PURE__ */ react.createElement(design_system_dist.Button, { type: "submit" }, formatMessage({
          id: (0,utils/* getTrad */.OB)("modal.popup.form.cta.update"),
          defaultMessage: "Update Popup Content"
        })) : /* @__PURE__ */ react.createElement(design_system_dist.Button, { type: "submit" }, formatMessage({
          id: (0,utils/* getTrad */.OB)("modal.popup.form.cta.create"),
          defaultMessage: "Add Popup Content"
        }))
      }
    )
  );
};


// EXTERNAL MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/components/CategoryAccordion/index.js
var CategoryAccordion = __webpack_require__(88930);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/api/cookie-manager.js
var cookie_manager = __webpack_require__(21246);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/pages/HomePage/index.js





















const HomePage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [cookieData, setCookieData] = (0,react.useState)([]);
  const [categoryData, setCategoryData] = (0,react.useState)([]);
  const [configData, setConfigData] = (0,react.useState)([]);
  const [localeData, setLocaleData] = (0,react.useState)([]);
  const [popupData, setPopupData] = (0,react.useState)([]);
  const [showPopupModal, setShowPopupModal] = (0,react.useState)(false);
  const [showCreateCookieModal, setShowCreateCookieModal] = (0,react.useState)(false);
  const [showUpdateCookieModal, setShowUpdateCookieModal] = (0,react.useState)(false);
  const [showDeleteCookieModal, setShowDeleteCookieModal] = (0,react.useState)(false);
  const [showDuplicateCookieModal, setShowDuplicateCookieModal] = (0,react.useState)(false);
  const [showDeleteAllCookieModal, setShowDeleteAllCookieModal] = (0,react.useState)(false);
  const [showCreateCategoryModal, setShowCreateCategoryModal] = (0,react.useState)(false);
  const [showUpdateCategoryModal, setShowUpdateCategoryModal] = (0,react.useState)(false);
  const [showDeleteCategoryModal, setShowDeleteCategoryModal] = (0,react.useState)(false);
  const [cookieIsLoading, setCookieIsLoading] = (0,react.useState)(true);
  const [categoryIsLoading, setCategoryIsLoading] = (0,react.useState)(true);
  const [configIsLoading, setConfigIsLoading] = (0,react.useState)(true);
  const [localeIsLoading, setLocaleIsLoading] = (0,react.useState)(true);
  const [popupIsLoading, setPopupIsLoading] = (0,react.useState)(true);
  const [currentCategory, setCurrentCategory] = (0,react.useState)(null);
  const [currentCookie, setCurrentCookie] = (0,react.useState)(null);
  const [currentCookies, setCurrentCookies] = (0,react.useState)([]);
  const [currentLocale, setCurrentLocale] = (0,react.useState)(null);
  const [expandedStates, setExpandedStates] = (0,react.useState)([]);
  const setCookies = async () => {
    setCookieIsLoading(true);
    const cookies = await cookie_manager/* default.getCookies */.Z.getCookies(currentLocale);
    setCookieData(cookies);
    setCookieIsLoading(false);
  };
  const setCategories = async () => {
    setCategoryIsLoading(true);
    const categories = await cookie_manager/* default.getCategories */.Z.getCategories(currentLocale);
    setCategoryData(categories);
    setCategoryIsLoading(false);
  };
  const setPopups = async () => {
    setPopupIsLoading(true);
    const popups = await cookie_manager/* default.getPopups */.Z.getPopups(currentLocale);
    setPopupData(popups);
    setPopupIsLoading(false);
  };
  const getLocales = async () => {
    const locales = await cookie_manager/* default.getLocales */.Z.getLocales();
    const defaultLocale = locales.filter((locale) => locale.isDefault)[0];
    setLocaleData(locales);
    setCurrentLocale(defaultLocale.code);
    setLocaleIsLoading(false);
  };
  const getConfig = async () => {
    const config = await cookie_manager/* default.getConfig */.Z.getConfig();
    setConfigData(config);
    setConfigIsLoading(false);
  };
  const createCookie = async (data) => {
    await cookie_manager/* default.createCookie */.Z.createCookie(data);
    await setCookies();
  };
  const createCategory = async (data) => {
    await cookie_manager/* default.createCategory */.Z.createCategory(data);
    await setCategories();
  };
  const createPopup = async (data) => {
    await cookie_manager/* default.createPopup */.Z.createPopup(data);
    await setPopups();
  };
  const deleteCookie = async (data) => {
    await cookie_manager/* default.deleteCookie */.Z.deleteCookie(data.id);
    await setCookies();
  };
  const deleteAllCookie = async (data) => {
    for (const cookie of data) {
      await cookie_manager/* default.deleteCookie */.Z.deleteCookie(cookie.id);
    }
    await setCookies();
  };
  const deleteCategory = async (data) => {
    await cookie_manager/* default.deleteCategory */.Z.deleteCategory(data.id);
    await setCategories();
  };
  const deletePopup = async (data) => {
    await cookie_manager/* default.deletePopup */.Z.deletePopup(data.id);
    await setPopups();
  };
  const updateCookie = async (data) => {
    await cookie_manager/* default.updateCookie */.Z.updateCookie(data.id, data);
    await setCookies();
  };
  const updateCategory = async (data) => {
    await cookie_manager/* default.updateCategory */.Z.updateCategory(data.id, data);
    await setCategories();
  };
  const updatePopup = async (data) => {
    await cookie_manager/* default.updatePopup */.Z.updatePopup(data.id, data);
    await setPopups();
  };
  const createAccordionState = (id, isExpanded = false) => {
    const stateExists = expandedStates.filter((obj) => obj.id === id).length > 0;
    if (!stateExists)
      setExpandedStates([{ id, isExpanded }, ...expandedStates]);
  };
  (0,react.useEffect)(async () => {
    await getConfig();
    await getLocales();
    await setCategories();
    await setCookies();
    await setPopups();
  }, []);
  (0,react.useEffect)(async () => {
    await setCategories();
    await setCookies();
    await setPopups();
  }, [currentLocale]);
  const isLoading = !(!cookieIsLoading && !categoryIsLoading && !configIsLoading && !localeIsLoading && !popupIsLoading);
  return !isLoading ? /* @__PURE__ */ react.createElement(i, null, /* @__PURE__ */ react.createElement(
    HeaderLayout/* BaseHeaderLayout */.A,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("header.title"),
        defaultMessage: "Cookie Manager"
      }),
      subtitle: formatMessage({
        id: (0,utils/* getTrad */.OB)("header.description"),
        defaultMessage: "Create and organize your cookies in one place"
      }),
      as: "h2",
      primaryAction: /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 4 }, /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          startIcon: /* @__PURE__ */ react.createElement(o, null),
          onClick: () => {
            setShowPopupModal(true);
          }
        },
        formatMessage({
          id: (0,utils/* getTrad */.OB)("header.cta.manage"),
          defaultMessage: "Manage popup content"
        })
      ), configData.localization && /* @__PURE__ */ react.createElement(
        z,
        {
          id: "lang-select",
          "aria-label": formatMessage({
            id: (0,utils/* getTrad */.OB)("header.cta.locale.label"),
            defaultMessage: "Choose the language to edit"
          }),
          value: currentLocale,
          defaultValue: currentLocale,
          onChange: setCurrentLocale
        },
        localeData.map((locale, index) => /* @__PURE__ */ react.createElement(n, { key: index, value: locale.code }, locale.code.toUpperCase()))
      ))
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, categoryData.length === 0 ? /* @__PURE__ */ react.createElement(
    EmptyStateLayout_a,
    {
      icon: /* @__PURE__ */ react.createElement(Illo/* default */.Z, null),
      content: formatMessage({
        id: (0,utils/* getTrad */.OB)("empty.category"),
        defaultMessage: "You don't have any categories yet..."
      }),
      action: /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null),
          variant: "secondary",
          onClick: () => {
            setCurrentCategory(null);
            setShowCreateCategoryModal(true);
          }
        },
        formatMessage({
          id: (0,utils/* getTrad */.OB)("empty.category.cta"),
          defaultMessage: "Add your first category"
        })
      ),
      shadow: "none"
    }
  ) : /* @__PURE__ */ react.createElement(C, { footer: /* @__PURE__ */ react.createElement(
    TFooter/* TFooter */.c,
    {
      onClick: () => {
        setCurrentCategory(null);
        setShowCreateCategoryModal(true);
      },
      icon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null)
    },
    formatMessage({
      id: (0,utils/* getTrad */.OB)("modal.category.form.cta.create"),
      defaultMessage: "Create new category"
    })
  ) }, categoryData.map((category, index) => {
    const cookieMatches = cookieData.filter((cookie) => cookie.category?.id === category.id);
    const firstIndex = index === 0;
    firstIndex ? createAccordionState(category.id, true) : createAccordionState(category.id);
    return /* @__PURE__ */ react.createElement(
      CategoryAccordion/* default */.Z,
      {
        key: index,
        cookies: cookieMatches,
        setCategory: setCurrentCategory,
        setCookies: setCurrentCookies,
        category,
        expandedStates,
        setExpandedStates,
        setShowCreateCookieModal,
        setShowUpdateCategoryModal,
        setShowDeleteCategoryModal
      },
      cookieMatches.length > 0 ? /* @__PURE__ */ react.createElement(
        CookieTable/* default */.Z,
        {
          cookies: cookieMatches,
          setCookie: setCurrentCookie,
          setCookies: setCurrentCookies,
          category,
          setCategory: setCurrentCategory,
          updateCookie,
          setShowCreateCookieModal,
          setShowUpdateCookieModal,
          setShowDeleteCookieModel: setShowDeleteCookieModal,
          setShowDuplicateCookieModal,
          setShowDeleteAllCookieModal
        }
      ) : /* @__PURE__ */ react.createElement(
        EmptyStateLayout_a,
        {
          icon: /* @__PURE__ */ react.createElement(Illo/* default */.Z, null),
          content: formatMessage({
            id: (0,utils/* getTrad */.OB)("empty.cookie"),
            defaultMessage: "You don't have any cookies yet..."
          }),
          action: /* @__PURE__ */ react.createElement(
            Button/* Button */.z,
            {
              startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null),
              variant: "secondary",
              onClick: () => {
                setCurrentCategory(category);
                setShowCreateCookieModal(true);
              }
            },
            formatMessage({
              id: (0,utils/* getTrad */.OB)("empty.cookie.cta"),
              defaultMessage: "Add your first cookie"
            })
          ),
          shadow: "none"
        }
      )
    );
  }))), showPopupModal && /* @__PURE__ */ react.createElement(PopupContentModal, { setShowModal: setShowPopupModal, createPopup, updatePopup, popup: (0,lodash.first)(popupData), locale: currentLocale }), showCreateCategoryModal && /* @__PURE__ */ react.createElement(CategoryModal/* CreateCategoryModal */.vs, { setShowModal: setShowCreateCategoryModal, createCategory, locale: currentLocale }), showUpdateCategoryModal && /* @__PURE__ */ react.createElement(CategoryModal/* UpdateCategoryModal */.R7, { setShowModal: setShowUpdateCategoryModal, updateCategory, category: currentCategory }), showDeleteCategoryModal && /* @__PURE__ */ react.createElement(CategoryModal/* DeleteCategoryModal */.u3, { setShowModal: setShowDeleteCategoryModal, deleteCategory, deleteAllCookie, category: currentCategory, cookies: currentCookies, showModal: showDeleteCategoryModal }), showCreateCookieModal && /* @__PURE__ */ react.createElement(CookieModal/* CreateCookieModal */.rB, { setShowModal: setShowCreateCookieModal, createCookie, categories: categoryData, locale: currentLocale, preservedCategory: currentCategory }), showUpdateCookieModal && /* @__PURE__ */ react.createElement(CookieModal/* UpdateCookieModal */.PT, { setShowModal: setShowUpdateCookieModal, updateCookie, categories: categoryData, cookie: currentCookie }), showDeleteCookieModal && /* @__PURE__ */ react.createElement(CookieModal/* DeleteCookieModal */.WL, { setShowModal: setShowDeleteCookieModal, deleteCookie, cookie: currentCookie, showModal: showDeleteCookieModal }), showDuplicateCookieModal && /* @__PURE__ */ react.createElement(CookieModal/* DuplicateCookieModal */.vk, { setShowModal: setShowDuplicateCookieModal, createCookie, categories: categoryData, cookie: currentCookie, locale: currentLocale }), showDeleteAllCookieModal && /* @__PURE__ */ react.createElement(CookieModal/* DeleteAllCookieModal */.Wx, { setShowModal: setShowDeleteAllCookieModal, deleteAllCookie, cookies: currentCookies, showModal: showDeleteAllCookieModal })) : /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null);
};
/* harmony default export */ const pages_HomePage = ((0,react.memo)(HomePage));

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/pages/App/index.js





const App = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: `/plugins/${utils/* pluginId */.aw}`, component: pages_HomePage, exact: true }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { component: helper_plugin.NotFound })));
};
/* harmony default export */ const pages_App = (App);


/***/ }),

/***/ 49066:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41580);



const p = ({ children: e }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .x, { paddingLeft: 10, paddingRight: 10 }, e);
p.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__.node.isRequired
};



/***/ }),

/***/ 53979:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ s),
  "T": () => (/* binding */ p)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useElementOnScreen.js

const b = (t) => {
  const e = (0,react.useRef)(null), [s, c] = (0,react.useState)(!0), i = ([n]) => {
    c(n.isIntersecting);
  };
  return (0,react.useEffect)(() => {
    const n = e.current, r = new IntersectionObserver(i, t);
    return n && r.observe(e.current), () => {
      n && r.disconnect();
    };
  }, [e, t]), [e, s];
};


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.js
var dist = __webpack_require__(98402);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useResizeObserver.js


const c = (e, i) => {
  const t = (0,dist.useCallbackRef)(i);
  (0,react.useLayoutEffect)(() => {
    const r = new ResizeObserver(t);
    return Array.isArray(e) ? e.forEach((n) => {
      n.current && r.observe(n.current);
    }) : e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e, t]);
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js








const L = () => {
  const n = (0,react.useRef)(null), [o, a] = (0,react.useState)(null), [r, d] = b({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  return c(r, () => {
    r.current && a(r.current.getBoundingClientRect());
  }), (0,react.useEffect)(() => {
    n.current && a(n.current.getBoundingClientRect());
  }, [n]), {
    containerRef: r,
    isVisible: d,
    baseHeaderLayoutRef: n,
    headerSize: o
  };
}, p = (n) => {
  const { containerRef: o, isVisible: a, baseHeaderLayoutRef: r, headerSize: d } = L();
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { style: { height: d?.height }, ref: o }, a && /* @__PURE__ */ react.createElement(s, { ref: r, ...n })), !a && /* @__PURE__ */ react.createElement(s, { ...n, sticky: !0, width: d?.width }));
};
p.displayName = "HeaderLayout";
const x = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  width: ${(n) => n.width}px;
`, s = react.forwardRef(
  ({ navigationAction: n, primaryAction: o, secondaryAction: a, subtitle: r, title: d, sticky: f, width: g, ...u }, y) => {
    const m = typeof r == "string";
    return f ? /* @__PURE__ */ react.createElement(
      x,
      {
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 3,
        paddingBottom: 3,
        position: "fixed",
        top: 0,
        right: 0,
        background: "neutral0",
        shadow: "tableShadow",
        width: g,
        zIndex: 4,
        "data-strapi-header-sticky": !0
      },
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, n && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 3 }, n), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta", as: "h1", ...u }, d), m ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, r) : r), a ? /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 4 }, a) : null), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, o ? /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 2 }, o) : void 0))
    ) : /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        ref: y,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 8,
        paddingTop: n ? 6 : 8,
        background: "neutral100",
        "data-strapi-header": !0
      },
      n ? /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 2 }, n) : null,
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { minWidth: 0 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "h1", variant: "alpha", ...u }, d), a ? /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 4 }, a) : null), o),
      m ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600", as: "p" }, r) : r
    );
  }
);
s.displayName = "BaseHeaderLayout";
s.defaultProps = {
  navigationAction: void 0,
  primaryAction: void 0,
  secondaryAction: void 0,
  subtitle: void 0,
  sticky: !1,
  width: void 0
};
s.propTypes = {
  navigationAction: prop_types.node,
  primaryAction: prop_types.node,
  secondaryAction: prop_types.node,
  sticky: prop_types.bool,
  subtitle: prop_types.oneOfType([prop_types.string, prop_types.node]),
  title: prop_types.string.isRequired,
  width: prop_types.number
};
p.defaultProps = {
  navigationAction: void 0,
  primaryAction: void 0,
  secondaryAction: void 0,
  subtitle: void 0
};
p.propTypes = {
  navigationAction: prop_types.node,
  primaryAction: prop_types.node,
  secondaryAction: prop_types.node,
  subtitle: prop_types.oneOfType([prop_types.string, prop_types.node]),
  title: prop_types.string.isRequired
};



/***/ })

}]);