"use strict";
(self["webpackChunkaiinsidehub_strapi"] = self["webpackChunkaiinsidehub_strapi"] || []).push([[3455],{

/***/ 98906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Roles_ProtectedListPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var design_system_dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
// EXTERNAL MODULE: ./node_modules/match-sorter/dist/match-sorter.cjs.js
var match_sorter_cjs = __webpack_require__(63852);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(48474);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/ListPage/components/EmptyRole/index.js
/* harmony default export */ const EmptyRole = (() => "todo empty role");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/ListPage/components/RoleRow/index.js





const RoleRow = ({ id, name, description, usersCount, icons, rowIndex }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const usersCountText = formatMessage(
    {
      id: `Roles.RoleRow.user-count`,
      defaultMessage: "{number, plural, =0 {#  user} one {#  user} other {# users}}"
    },
    { number: usersCount }
  );
  return /* @__PURE__ */ react.createElement(
    design_system_dist.Tr,
    {
      "aria-rowindex": rowIndex,
      key: id,
      ...(0,helper_plugin.onRowClick)({
        fn: icons[1].onClick
      })
    },
    /* @__PURE__ */ react.createElement(design_system_dist.Td, { maxWidth: (0,helper_plugin.pxToRem)(130) }, /* @__PURE__ */ react.createElement(design_system_dist.Typography, { ellipsis: true, textColor: "neutral800" }, name)),
    /* @__PURE__ */ react.createElement(design_system_dist.Td, { maxWidth: (0,helper_plugin.pxToRem)(250) }, /* @__PURE__ */ react.createElement(design_system_dist.Typography, { ellipsis: true, textColor: "neutral800" }, description)),
    /* @__PURE__ */ react.createElement(design_system_dist.Td, null, /* @__PURE__ */ react.createElement(design_system_dist.Typography, { textColor: "neutral800" }, usersCountText)),
    /* @__PURE__ */ react.createElement(design_system_dist.Td, null, /* @__PURE__ */ react.createElement(design_system_dist.Flex, { justifyContent: "flex-end", ...helper_plugin.stopPropagation }, icons.map(
      (icon, i) => icon ? /* @__PURE__ */ react.createElement(design_system_dist.Box, { key: icon.label, paddingLeft: i === 0 ? 0 : 1 }, /* @__PURE__ */ react.createElement(design_system_dist.IconButton, { onClick: icon.onClick, label: icon.label, noBorder: true, icon: icon.icon })) : null
    )))
  );
};
RoleRow.propTypes = {
  id: (prop_types_default()).number.isRequired,
  name: (prop_types_default()).string.isRequired,
  description: (prop_types_default()).string.isRequired,
  usersCount: (prop_types_default()).number.isRequired,
  icons: (prop_types_default()).array.isRequired,
  rowIndex: (prop_types_default()).number.isRequired
};
/* harmony default export */ const components_RoleRow = (RoleRow);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/ListPage/reducer.js

const initialState = {
  roleToDelete: null,
  showModalConfirmButtonLoading: false,
  shouldRefetchData: false
};
const reducer = (state, action) => (0,immer_esm["default"])(state, (draftState) => {
  switch (action.type) {
    case "ON_REMOVE_ROLES": {
      draftState.showModalConfirmButtonLoading = true;
      break;
    }
    case "ON_REMOVE_ROLES_SUCCEEDED": {
      draftState.shouldRefetchData = true;
      draftState.roleToDelete = null;
      break;
    }
    case "RESET_DATA_TO_DELETE": {
      draftState.shouldRefetchData = false;
      draftState.roleToDelete = null;
      draftState.showModalConfirmButtonLoading = false;
      break;
    }
    case "SET_ROLE_TO_DELETE": {
      draftState.roleToDelete = action.id;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const ListPage_reducer = (reducer);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/ListPage/index.js













const useSortedRoles = () => {
  (0,helper_plugin.useFocusWhenNavigate)();
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canCreate, canDelete, canRead, canUpdate }
  } = (0,helper_plugin.useRBAC)(permissions/* default.settings.roles */.Z.settings.roles);
  const { getData, roles, isLoading } = (0,hooks/* useRolesList */.bF)(false);
  const [{ query }] = (0,helper_plugin.useQueryParams)();
  const _q = query?._q || "";
  const sortedRoles = (0,match_sorter_cjs/* default */.ZP)(roles, _q, { keys: ["name", "description"] });
  (0,react.useEffect)(() => {
    if (!isLoadingForPermissions && canRead) {
      getData();
    }
  }, [isLoadingForPermissions, canRead, getData]);
  return {
    isLoadingForPermissions,
    canCreate,
    canDelete,
    canRead,
    canUpdate,
    isLoading,
    getData,
    sortedRoles,
    roles
  };
};
const useRoleActions = ({ getData, canCreate, canDelete, canUpdate }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const [isWarningDeleteAllOpened, setIsWarningDeleteAllOpenend] = (0,react.useState)(false);
  const { push } = (0,react_router_dom_min.useHistory)();
  const [{ selectedRoles, showModalConfirmButtonLoading, roleToDelete }, dispatch] = (0,react.useReducer)(
    ListPage_reducer,
    initialState
  );
  const { post } = (0,helper_plugin.getFetchClient)();
  const handleDeleteData = async () => {
    try {
      dispatch({
        type: "ON_REMOVE_ROLES"
      });
      await post("/admin/roles/batch-delete", {
        ids: [roleToDelete]
      });
      await getData();
      dispatch({
        type: "RESET_DATA_TO_DELETE"
      });
    } catch (err) {
      const errorIds = (0,lodash.get)(err, ["response", "payload", "data", "ids"], null);
      if (errorIds && Array.isArray(errorIds)) {
        const errorsMsg = errorIds.join("\n");
        toggleNotification({
          type: "warning",
          message: errorsMsg
        });
      } else {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
      }
    }
    handleToggleModal();
  };
  const onRoleDuplicate = (0,react.useCallback)(
    (id) => {
      push(`/settings/roles/duplicate/${id}`);
    },
    [push]
  );
  const handleNewRoleClick = () => push("/settings/roles/new");
  const onRoleRemove = (0,react.useCallback)((roleId) => {
    dispatch({
      type: "SET_ROLE_TO_DELETE",
      id: roleId
    });
    handleToggleModal();
  }, []);
  const handleToggleModal = () => setIsWarningDeleteAllOpenend((prev) => !prev);
  const handleGoTo = (0,react.useCallback)(
    (id) => {
      push(`/settings/roles/${id}`);
    },
    [push]
  );
  const handleClickDelete = (0,react.useCallback)(
    (e, role) => {
      e.preventDefault();
      e.stopPropagation();
      if (role.usersCount) {
        toggleNotification({
          type: "info",
          message: { id: "Roles.ListPage.notification.delete-not-allowed" }
        });
      } else {
        onRoleRemove(role.id);
      }
    },
    [toggleNotification, onRoleRemove]
  );
  const handleClickDuplicate = (0,react.useCallback)(
    (e, role) => {
      e.preventDefault();
      e.stopPropagation();
      onRoleDuplicate(role.id);
    },
    [onRoleDuplicate]
  );
  const getIcons = (0,react.useCallback)(
    (role) => [
      ...canCreate ? [
        {
          onClick: (e) => handleClickDuplicate(e, role),
          label: formatMessage({ id: "app.utils.duplicate", defaultMessage: "Duplicate" }),
          icon: /* @__PURE__ */ react.createElement(dist.Duplicate, null)
        }
      ] : [],
      ...canUpdate ? [
        {
          onClick: () => handleGoTo(role.id),
          label: formatMessage({ id: "app.utils.edit", defaultMessage: "Edit" }),
          icon: /* @__PURE__ */ react.createElement(dist.Pencil, null)
        }
      ] : [],
      ...canDelete ? [
        {
          onClick: (e) => handleClickDelete(e, role),
          label: formatMessage({ id: "global.delete", defaultMessage: "Delete" }),
          icon: /* @__PURE__ */ react.createElement(dist.Trash, null)
        }
      ] : []
    ],
    [
      formatMessage,
      handleClickDelete,
      handleClickDuplicate,
      handleGoTo,
      canCreate,
      canUpdate,
      canDelete
    ]
  );
  return {
    handleNewRoleClick,
    getIcons,
    selectedRoles,
    isWarningDeleteAllOpened,
    showModalConfirmButtonLoading,
    handleToggleModal,
    handleDeleteData
  };
};
const RoleListPage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const {
    isLoadingForPermissions,
    canCreate,
    canRead,
    canDelete,
    canUpdate,
    isLoading,
    getData,
    sortedRoles
  } = useSortedRoles();
  const {
    handleNewRoleClick,
    getIcons,
    isWarningDeleteAllOpened,
    showModalConfirmButtonLoading,
    handleToggleModal,
    handleDeleteData
  } = useRoleActions({ getData, canCreate, canDelete, canUpdate });
  const rowCount = sortedRoles.length + 1;
  const colCount = 6;
  if (isLoadingForPermissions) {
    return /* @__PURE__ */ react.createElement(design_system_dist.Main, null, /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null));
  }
  const title = formatMessage({
    id: "global.roles",
    defaultMessage: "roles"
  });
  return /* @__PURE__ */ react.createElement(design_system_dist.Main, null, /* @__PURE__ */ react.createElement(helper_plugin.SettingsPageTitle, { name: "Roles" }), /* @__PURE__ */ react.createElement(
    design_system_dist.HeaderLayout,
    {
      primaryAction: canCreate ? /* @__PURE__ */ react.createElement(design_system_dist.Button, { onClick: handleNewRoleClick, startIcon: /* @__PURE__ */ react.createElement(dist.Plus, null), size: "S" }, formatMessage({
        id: "Settings.roles.list.button.add",
        defaultMessage: "Add new role"
      })) : null,
      title,
      subtitle: formatMessage({
        id: "Settings.roles.list.description",
        defaultMessage: "List of roles"
      }),
      as: "h2"
    }
  ), canRead && /* @__PURE__ */ react.createElement(
    design_system_dist.ActionLayout,
    {
      startActions: /* @__PURE__ */ react.createElement(
        helper_plugin.SearchURLQuery,
        {
          label: formatMessage(
            { id: "app.component.search.label", defaultMessage: "Search for {target}" },
            { target: title }
          )
        }
      )
    }
  ), canRead && /* @__PURE__ */ react.createElement(design_system_dist.ContentLayout, null, /* @__PURE__ */ react.createElement(
    design_system_dist.Table,
    {
      colCount,
      rowCount,
      footer: canCreate ? /* @__PURE__ */ react.createElement(design_system_dist.TFooter, { onClick: handleNewRoleClick, icon: /* @__PURE__ */ react.createElement(dist.Plus, null) }, formatMessage({
        id: "Settings.roles.list.button.add",
        defaultMessage: "Add new role"
      })) : null
    },
    /* @__PURE__ */ react.createElement(design_system_dist.Thead, null, /* @__PURE__ */ react.createElement(design_system_dist.Tr, { "aria-rowindex": 1 }, /* @__PURE__ */ react.createElement(design_system_dist.Th, null, /* @__PURE__ */ react.createElement(design_system_dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "global.name",
      defaultMessage: "Name"
    }))), /* @__PURE__ */ react.createElement(design_system_dist.Th, null, /* @__PURE__ */ react.createElement(design_system_dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "global.description",
      defaultMessage: "Description"
    }))), /* @__PURE__ */ react.createElement(design_system_dist.Th, null, /* @__PURE__ */ react.createElement(design_system_dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "global.users",
      defaultMessage: "Users"
    }))), /* @__PURE__ */ react.createElement(design_system_dist.Th, null, /* @__PURE__ */ react.createElement(design_system_dist.VisuallyHidden, null, formatMessage({
      id: "global.actions",
      defaultMessage: "Actions"
    }))))),
    /* @__PURE__ */ react.createElement(design_system_dist.Tbody, null, sortedRoles?.map((role, index) => /* @__PURE__ */ react.createElement(
      components_RoleRow,
      {
        key: role.id,
        id: role.id,
        name: role.name,
        description: role.description,
        usersCount: role.usersCount,
        icons: getIcons(role),
        rowIndex: index + 2
      }
    )))
  ), !rowCount && !isLoading && /* @__PURE__ */ react.createElement(EmptyRole, null)), /* @__PURE__ */ react.createElement(
    helper_plugin.ConfirmDialog,
    {
      isOpen: isWarningDeleteAllOpened,
      onConfirm: handleDeleteData,
      isConfirmButtonLoading: showModalConfirmButtonLoading,
      onToggleDialog: handleToggleModal
    }
  ));
};
/* harmony default export */ const ListPage = (RoleListPage);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/ProtectedListPage/index.js




const ProtectedListPage = () => /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: permissions/* default.settings.roles.main */.Z.settings.roles.main }, /* @__PURE__ */ react.createElement(ListPage, null));
/* harmony default export */ const Roles_ProtectedListPage = (ProtectedListPage);


/***/ })

}]);