"use strict";
(() => {
var exports = {};
exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 118:
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ 95:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);

const configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);
/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: generatePrompt(req.body.animal),
        temperature: 0.6
    });
    res.status(200).json({
        result: completion.data.choices[0].text
    });
}
function generatePrompt(animal) {
    const capitalizedAnimal = animal[0].toUpperCase() + animal.slice(1).toLowerCase();
    return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(95));
module.exports = __webpack_exports__;

})();