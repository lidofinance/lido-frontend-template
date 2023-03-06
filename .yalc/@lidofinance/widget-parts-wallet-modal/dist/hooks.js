"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModal = void 0;
const react_1 = require("react");
const context_1 = require("./context");
const useModal = (wModal) => {
    const methods = (0, react_1.useContext)(context_1.ModalContext);
    const openModal = (0, react_1.useCallback)(() => {
        methods.openModal(wModal);
    }, [methods, wModal]);
    return {
        openModal,
        closeModal: methods.closeModal,
    };
};
exports.useModal = useModal;
