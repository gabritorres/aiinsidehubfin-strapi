"use strict";
(self["webpackChunkaiinsidehub_strapi"] = self["webpackChunkaiinsidehub_strapi"] || []).push([[148],{

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

/***/ 89344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_SettingsPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js



const r = styled_components_browser_esm["default"].main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`, e = ({ labelledBy: o, ...t }) => {
  const n = o || "main-content-title";
  return /* @__PURE__ */ react.createElement(r, { "aria-labelledby": n, id: "main-content", tabIndex: -1, ...t });
};
e.defaultProps = {
  labelledBy: void 0
};
e.propTypes = {
  labelledBy: prop_types.string
};


// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.js
var Field = __webpack_require__(54574);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js + 1 modules
var FieldLabel = __webpack_require__(19270);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldHint.js
var FieldHint = __webpack_require__(63428);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldError.js
var FieldError = __webpack_require__(96404);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/hooks/useId.js
var useId = __webpack_require__(2504);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.js
var TextButton = __webpack_require__(39785);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/themes/sizes.js
var sizes = __webpack_require__(75228);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldContext.js
var FieldContext = __webpack_require__(88262);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/themes/utils.js
var utils = __webpack_require__(15585);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/ToggleCheckbox/ToggleCheckbox.js















const S = styled_components_browser_esm["default"].label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`, j = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  cursor: ${({ disabled: e }) => e ? "not-allowed" : void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${(0,utils/* inputFocusStyle */.k3)()}
`, m = (0,styled_components_browser_esm["default"])(Flex/* Flex */.k).attrs({
  hasRadius: !0
})`
  background-color: ${({ theme: e, checked: a, disabled: i }) => a ? i ? e.colors.neutral200 : e.colors.neutral0 : "transparent"};
  border: 1px solid
    ${({ theme: e, checked: a, disabled: i }) => a && a !== null ? i ? e.colors.neutral300 : e.colors.neutral200 : i ? e.colors.neutral150 : e.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({ size: e }) => `${e === "S" ? "2px" : "6px"}`};
  padding-bottom: ${({ size: e }) => `${e === "S" ? "2px" : "6px"}`};
`, B = styled_components_browser_esm["default"].input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`, ToggleCheckbox_s = react.forwardRef(
  ({ size: e, onLabel: a, offLabel: i, children: g, checked: r, disabled: o, onChange: h, ...b }, x) => {
    const { error: y, hint: C, id: d, name: w, required: v } = (0,FieldContext/* useField */.U)(), f = "neutral600";
    let $ = !r && r !== null ? "danger700" : f, k = r ? "primary600" : f;
    const R = (u) => {
      o || h(u);
    };
    let p;
    return y ? p = `${d}-error` : C && (p = `${d}-hint`), /* @__PURE__ */ react.createElement(S, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, g), /* @__PURE__ */ react.createElement(
      j,
      {
        hasRadius: !0,
        disabled: o,
        padding: 1,
        display: "flex",
        background: o ? "neutral150" : "neutral100",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "neutral200"
      },
      /* @__PURE__ */ react.createElement(
        m,
        {
          size: e,
          paddingLeft: 3,
          paddingRight: 3,
          justifyContent: "center",
          alignItems: "center",
          "aria-hidden": !0,
          checked: r === null ? !1 : !r,
          disabled: o
        },
        /* @__PURE__ */ react.createElement(
          Typography/* Typography */.Z,
          {
            variant: "pi",
            fontWeight: "bold",
            textTransform: "uppercase",
            textColor: o ? "neutral700" : $
          },
          i
        )
      ),
      /* @__PURE__ */ react.createElement(
        m,
        {
          size: e,
          paddingLeft: 3,
          paddingRight: 3,
          justifyContent: "center",
          alignItems: "center",
          "aria-hidden": !0,
          checked: r === null ? !1 : r,
          disabled: o
        },
        /* @__PURE__ */ react.createElement(
          Typography/* Typography */.Z,
          {
            variant: "pi",
            fontWeight: "bold",
            textTransform: "uppercase",
            textColor: o ? "neutral700" : k
          },
          a
        )
      ),
      /* @__PURE__ */ react.createElement(
        B,
        {
          type: "checkbox",
          "aria-disabled": o,
          "aria-describedby": p,
          onChange: (u) => R(u),
          name: w,
          ref: x,
          "aria-required": v,
          ...b,
          checked: !(r === null || !r)
        }
      )
    ));
  }
);
ToggleCheckbox_s.displayName = "ToggleCheckbox";
ToggleCheckbox_s.defaultProps = {
  disabled: !1,
  checked: !1,
  onChange: void 0,
  size: "M"
};
ToggleCheckbox_s.propTypes = {
  checked: prop_types.bool,
  children: prop_types.string.isRequired,
  disabled: prop_types.bool,
  offLabel: prop_types.string.isRequired,
  onChange: prop_types.func,
  onLabel: prop_types.string.isRequired,
  size: prop_types.oneOf(Object.keys(sizes/* sizes.input */.J.input))
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/ToggleInput/ToggleInput.js















const O = (0,styled_components_browser_esm["default"])(Field/* Field */.g)`
  max-width: 320px;
`, z = (0,styled_components_browser_esm["default"])(TextButton/* TextButton */.A)`
  align-self: flex-end;
  margin-left: auto;
`, t = ({
  disabled: o,
  size: s,
  error: c,
  hint: f,
  label: i,
  name: u,
  labelAction: g,
  required: b,
  id: E,
  onClear: l,
  clearLabel: n,
  checked: m,
  ...x
}) => {
  const a = (0,useId/* useId */.M)(E);
  return /* @__PURE__ */ react.createElement(O, { name: u, hint: f, error: c, id: a, required: b }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, { action: g }, i), n && l && m !== null && !o && /* @__PURE__ */ react.createElement(z, { onClick: l }, n)), /* @__PURE__ */ react.createElement(ToggleCheckbox_s, { id: a, size: s, checked: m, disabled: o, ...x }, i), /* @__PURE__ */ react.createElement(FieldHint/* FieldHint */.J, null), /* @__PURE__ */ react.createElement(FieldError/* FieldError */.c, null)));
};
t.displayName = "ToggleInput";
t.defaultProps = {
  checked: !1,
  clearLabel: void 0,
  disabled: !1,
  error: void 0,
  hint: void 0,
  id: void 0,
  label: "",
  labelAction: void 0,
  name: "",
  onClear: void 0,
  required: !1,
  size: "M"
};
t.propTypes = {
  checked: prop_types.bool,
  clearLabel: prop_types.string,
  disabled: prop_types.bool,
  error: prop_types.string,
  hint: prop_types.oneOfType([prop_types.string, prop_types.node, prop_types.arrayOf(prop_types.node)]),
  id: prop_types.string,
  label: prop_types.string,
  labelAction: prop_types.node,
  name: prop_types.string,
  onClear: prop_types.func,
  required: prop_types.bool,
  size: prop_types.oneOf(Object.keys(sizes/* sizes.input */.J.input))
};


;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Check.js

const Check_t = (e) => /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", {
  width: "1rem",
  height: "1rem",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e,
  children: /* @__PURE__ */ (0,jsx_runtime.jsx)("path", {
    d: "M20.727 2.97a.2.2 0 0 1 .286 0l2.85 2.89a.2.2 0 0 1 0 .28L9.554 20.854a.2.2 0 0 1-.285 0l-9.13-9.243a.2.2 0 0 1 0-.281l2.85-2.892a.2.2 0 0 1 .284 0l6.14 6.209L20.726 2.97Z",
    fill: "#212134"
  })
}), h = Check_t;


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/utils/index.js + 5 modules
var src_utils = __webpack_require__(34097);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/api/cookie-manager.js
var cookie_manager = __webpack_require__(21246);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/pages/SettingsPage/form-validation.js

const settingsSchema = lib/* object */.Ry().shape({
  localization: lib/* boolean */.O7().required("Required")
});
/* harmony default export */ const form_validation = (settingsSchema);

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-cookie-manager/admin/src/pages/SettingsPage/index.js
















const SettingsPage = () => {
  const [config, setConfig] = (0,react.useState)({});
  const [configIsLoading, setConfigIsLoading] = (0,react.useState)(true);
  const { formatMessage } = (0,react_intl.useIntl)();
  const { lockApp, unlockApp } = (0,helper_plugin.useOverlayBlocker)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const getConfigData = async () => {
    const config2 = await cookie_manager/* default.getConfig */.Z.getConfig();
    setConfig(config2);
    setConfigIsLoading(false);
  };
  const updateConfig = async (data) => {
    await cookie_manager/* default.updateConfig */.Z.updateConfig(data);
  };
  const handleSubmit = (body, form) => {
    try {
      lockApp();
      updateConfig(body);
    } catch {
      toggleNotification({
        type: "warning",
        message: { id: "Error on save", defaultMessage: "An error occured" }
      });
      unlockApp();
      form.setSubmitting(false);
    } finally {
      toggleNotification({
        type: "success",
        message: { id: "Successfully saved configuration", defaultMessage: "Saved" }
      });
      unlockApp();
      form.setSubmitting(false);
    }
  };
  (0,react.useEffect)(async () => {
    await getConfigData();
  }, []);
  return /* @__PURE__ */ react.createElement(e, null, /* @__PURE__ */ react.createElement(
    dist.Formik,
    {
      onSubmit: handleSubmit,
      initialValues: config,
      validateOnChange: false,
      validation: form_validation,
      enableReinitialize: true
    },
    ({
      values,
      handleChange,
      isSubmitting
    }) => /* @__PURE__ */ react.createElement(helper_plugin.Form, null, /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        title: formatMessage({
          id: (0,src_utils/* getTrad */.OB)("settings.header.title"),
          defaultMessage: src_utils/* pluginName */.oy
        }),
        subtitle: formatMessage({
          id: (0,src_utils/* getTrad */.OB)("settings.header.description"),
          defaultMessage: "Configure the settings for the Cookie Manager plugin"
        }),
        as: "h2",
        primaryAction: /* @__PURE__ */ react.createElement(
          Button/* Button */.z,
          {
            loading: isSubmitting,
            type: "submit",
            startIcon: /* @__PURE__ */ react.createElement(h, null),
            size: "L"
          },
          formatMessage({ id: "global.save", defaultMessage: "Save" })
        )
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", hasRadius: true, shadow: "filterShadow", padding: 6 }, configIsLoading ? /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null) : /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 6, alignItems: "flex-start" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta", as: "h2" }, formatMessage({
      id: (0,src_utils/* getTrad */.OB)("settings.form.title"),
      defaultMessage: "Settings"
    })), /* @__PURE__ */ react.createElement(
      t,
      {
        hint: formatMessage({
          id: (0,src_utils/* getTrad */.OB)("settings.form.field.localization.hint"),
          defaultMessage: "Enable localization for this plugin"
        }),
        label: formatMessage({
          id: (0,src_utils/* getTrad */.OB)("settings.form.field.localization.label"),
          defaultMessage: "Internationalization"
        }),
        name: "localization",
        onLabel: formatMessage({
          id: (0,src_utils/* getTrad */.OB)("settings.form.field.localization.option.a"),
          defaultMessage: "True"
        }),
        offLabel: formatMessage({
          id: (0,src_utils/* getTrad */.OB)("settings.form.field.localization.option.b"),
          defaultMessage: "False"
        }),
        checked: values.localization,
        onChange: handleChange
      }
    )))))
  ));
};
/* harmony default export */ const pages_SettingsPage = (SettingsPage);


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