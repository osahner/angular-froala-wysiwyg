(self["webpackChunkangular_froala_wysiwyg_demo"] = self["webpackChunkangular_froala_wysiwyg_demo"] || []).push([["main"],{

/***/ 7647:
/*!************************************************!*\
  !*** ./projects/demo/src/app/app.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var froala_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! froala-editor */ 6717);
/* harmony import */ var froala_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(froala_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _froala_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./froala.component */ 9683);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _library_src_view_view_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/src/view/view.directive */ 3161);
/* harmony import */ var _library_src_editor_editor_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../library/src/editor/editor.directive */ 4559);








let AppComponent = class AppComponent {
  constructor() {
    // Sample 1 models
    this.titleOptions = {
      placeholderText: 'Edit Your Content Here!',
      charCounterCount: false,
      toolbarInline: true,
      events: {
        initialized: () => {
          console.log('initialized');
        },
        contentChanged: () => {
          console.log('content changed');
        }
      }
    };
    // Sample 2 model
    this.content = "<span>My Document's Title</span>";
    // Sample 5 model
    this.imgModel = {
      src: '/image.jpg'
    };
    this.imgOptions = {
      angularIgnoreAttrs: ['style', 'ng-reflect-froala-editor', 'ng-reflect-froala-model'],
      immediateAngularModelUpdate: true,
      events: {
        contentChanged: () => {}
      }
    };
    // Sample 6 model
    this.buttonModel = {
      innerHTML: 'Click Me'
    };
    // Sample 7 models
    this.inputModel = {
      placeholder: 'I am an input!'
    };
    this.linkModel = {
      href: 'https://www.froala.com/wysiwyg-editor'
    };
    // Sample 9
    this.formControls = {
      formModel: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('Hello World', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2))
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup(this.formControls);
    // Sample 10
    this.form2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
      formModel: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('Hello World', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2))
    });
    // Sample 11
    // Depending on your screen size you may want to use a specific toolbar dimension or all of them.
    this.options = {
      charCounterCount: true,
      toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
      toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
      toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
      toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert']
    };
  }
  ngOnInit() {
    froala_editor__WEBPACK_IMPORTED_MODULE_0___default().DefineIcon('alert', {
      SVG_KEY: 'help'
    });
    froala_editor__WEBPACK_IMPORTED_MODULE_0___default().RegisterCommand('alert', {
      title: 'Hello',
      focus: false,
      undo: false,
      refreshAfterCallback: false,
      callback: function () {
        alert('Hello!');
      }
    });
  }
  initialize(initControls) {
    this.initControls = initControls;
    this.deleteAll = function () {
      this.initControls.getEditor().html.set();
      this.initControls.getEditor().undo.reset();
      this.initControls.getEditor().undo.saveStep();
    };
  }
  initializeLink(linkInitControls) {
    this.linkInitControls = linkInitControls;
  }
  onBlurMethod() {}
  get formModel() {
    return this.form.get('formModel');
  }
  onSubmit() {
    console.log(this.form.value);
  }
  setValue() {
    this.form.setValue({
      formModel: 'Default text'
    });
  }
  get form2Model() {
    return this.form2.get('formModel');
  }
  onSubmit2() {
    console.log(this.form2.value);
  }
  setValue2() {
    this.form2.setValue({
      formModel: 'Default text'
    });
  }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-demo',
  template: `
    <h1>Angular adapter for the Froala WYSIWYG editor</h1>
    <div class="sample">
      <h2>Sample 1: Inline Edit</h2>
      <div id="sample1" [froalaEditor]="titleOptions" [(froalaModel)]="myTitle"></div>
      <input [(ngModel)]="myTitle" (blur)="onBlurMethod()" />
    </div>
    <div class="sample">
      <h2>Sample 2: Full Editor</h2>
      <div id="sample2" [froalaEditor]="imgOptions" [(froalaModel)]="content"></div>
      <h4>Rendered Content:</h4>
      <div [froalaView]="content"></div>
    </div>
    <div class="sample">
      <h2>Sample 3: Two way binding</h2>
      <div id="sample3-1" [froalaEditor] [(froalaModel)]="twoWayContent"></div>
      <div id="sample3-2" [froalaEditor] [(froalaModel)]="twoWayContent"></div>
    </div>
    <div class="sample">
      <h2>Sample 4: Manual Initialization</h2>
      <button class="manual" (click)="initControls.initialize()">Initialize Editor</button>
      <button
        (click)="initControls.destroy()"
        [hidden]="!initControls || initControls.getEditor() == null"
      >
        Close Editor
      </button>
      <button (click)="deleteAll()" [hidden]="!initControls || initControls.getEditor() == null">
        Delete All
      </button>
      <div
        id="sample4"
        [froalaEditor]
        (froalaInit)="initialize($event)"
        [(froalaModel)]="sample3Text"
      >
        Check out the <a href="https://www.froala.com/wysiwyg-editor">Froala Editor</a>
      </div>
    </div>
    <div class="sample">
      <h2>Sample 5: Editor on 'img' tag. Two way binding.</h2>
      <img id="sample5-1" [froalaEditor]="imgOptions" [(froalaModel)]="imgModel" />
      <img id="sample5-2" [froalaEditor]="imgOptions" [(froalaModel)]="imgModel" />
      <h4>Model Obj:</h4>
      <div>{{ imgModel | json }}</div>
    </div>
    <div class="sample">
      <h2>Sample 6: Editor on 'button' tag</h2>
      <button id="sample6" [froalaEditor] [(froalaModel)]="buttonModel"></button>
      <h4>Model Obj:</h4>
      <div>{{ buttonModel | json }}</div>
    </div>
    <div class="sample">
      <h2>Sample 7: Editor on 'input' tag</h2>
      <input id="sample7" [froalaEditor] [(froalaModel)]="inputModel" />
      <h4>Model Obj:</h4>
      <div>{{ inputModel | json }}</div>
    </div>
    <div class="sample">
      <h2>Sample 8: Editor on 'a' tag. Manual Initialization</h2>
      <button class="manual" (click)="linkInitControls.initialize()">Initialize Editor</button>
      <button
        (click)="linkInitControls.destroy()"
        [hidden]="!linkInitControls || linkInitControls.getEditor() == null"
      >
        Close Editor
      </button>
      <div>
        <a
          id="sample8"
          [froalaEditor]
          (froalaInit)="initializeLink($event)"
          [(froalaModel)]="linkModel"
          >Froala Editor</a
        >
      </div>
      <h4>Model Obj:</h4>
      <div>{{ linkModel | json }}</div>
    </div>

    <div class="sample">
      <h2>Sample 9: Editor with reactive forms</h2>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div *ngIf="formModel.invalid">Name is too short.</div>
        <h3>Textarea with formControlName and froalaModel</h3>
        <textarea
          id="sample9-1"
          [froalaEditor]
          formControlName="formModel"
          [(froalaModel)]="formControls.formModel"
        ></textarea>
        <h4>Rendered Content:</h4>
        <div [froalaView]="form.value.formModel"></div>
        <h3>Textarea only with formControlName</h3>
        <textarea id="sample9-2" [froalaEditor] formControlName="formModel"></textarea>
        <button type="submit">Submit</button>
      </form>
      <button (click)="setValue()">Set preset value</button>
    </div>

    <div class="sample">
      <h2>Sample 10: Editor wrapped in a component with reactive forms</h2>
      <form [formGroup]="form2" (ngSubmit)="onSubmit2()">
        <div *ngIf="formModel.invalid">Name is too short.</div>

        <froala-component formControlName="formModel"></froala-component>

        <button type="submit">Submit</button>
      </form>
      <button (click)="setValue2()">Set preset value</button>
    </div>

    <div class="sample">
      <h2>Sample 11: Add Custom Button</h2>
      <div id="sample11" [froalaEditor]="options" [(froalaModel)]="content"></div>
    </div>
  `,
  standalone: true,
  imports: [_library_src_editor_editor_directive__WEBPACK_IMPORTED_MODULE_3__.FroalaEditorDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _library_src_view_view_directive__WEBPACK_IMPORTED_MODULE_2__.FroalaViewDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _froala_component__WEBPACK_IMPORTED_MODULE_1__.FroalaComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.JsonPipe]
})], AppComponent);


/***/ }),

/***/ 9683:
/*!***************************************************!*\
  !*** ./projects/demo/src/app/froala.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FroalaComponent: () => (/* binding */ FroalaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _library_src_editor_editor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../library/src/editor/editor.directive */ 4559);
var _class;
var FroalaComponent_1;




let FroalaComponent = FroalaComponent_1 = (_class = class FroalaComponent {
  constructor() {
    // Begin ControlValueAccesor methods.
    this.onChange = _ => {};
    this.onTouched = () => {};
    this.config = {
      charCounterCount: false
    };
  }
  // Form model content changed.
  writeValue(content) {
    this.model = content;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}, _class.ctorParameters = () => [], _class);
FroalaComponent = FroalaComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'froala-component',
  template: `
    <textarea
      [froalaEditor]="config"
      (froalaModelChange)="onChange($event)"
      [(froalaModel)]="model"
    ></textarea>
  `,
  providers: [{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => FroalaComponent_1),
    multi: true
  }],
  standalone: true,
  imports: [_library_src_editor_editor_directive__WEBPACK_IMPORTED_MODULE_0__.FroalaEditorDirective]
})], FroalaComponent);


/***/ }),

/***/ 3885:
/*!***********************************!*\
  !*** ./projects/demo/src/main.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ 533);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfills__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 7647);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 6480);






(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule)]
});

/***/ }),

/***/ 533:
/*!****************************************!*\
  !*** ./projects/demo/src/polyfills.ts ***!
  \****************************************/
/***/ (() => {

// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
/* import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js';

import 'classlist.js';
 */

/***/ }),

/***/ 4559:
/*!*********************************************************!*\
  !*** ./projects/library/src/editor/editor.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FroalaEditorDirective: () => (/* binding */ FroalaEditorDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var froala_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! froala-editor */ 6717);
/* harmony import */ var froala_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(froala_editor__WEBPACK_IMPORTED_MODULE_0__);
var _class;
var FroalaEditorDirective_1;




let FroalaEditorDirective = FroalaEditorDirective_1 = (_class = class FroalaEditorDirective {
  constructor(el, zone) {
    this.zone = zone;
    // editor options
    this._opts = {
      immediateAngularModelUpdate: false,
      angularIgnoreAttrs: null
    };
    this.SPECIAL_TAGS = ['img', 'button', 'input', 'a'];
    this.INNER_HTML_ATTR = 'innerHTML';
    this._hasSpecialTag = false;
    this._editorInitialized = false;
    this._oldModel = null;
    // Begin ControlValueAccesor methods.
    this.onChange = _ => {};
    this.onTouched = () => {};
    this.froalaModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.froalaInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    let element = el.nativeElement;
    // check if the element is a special tag
    if (this.SPECIAL_TAGS.indexOf(element.tagName.toLowerCase()) != -1) {
      this._hasSpecialTag = true;
    }
    this._element = element;
    this.zone = zone;
  }
  // Form model content changed.
  writeValue(content) {
    this.updateEditor(content);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  set froalaEditor(opts) {
    this._opts = this.clone(opts || this._opts);
    this._opts = {
      ...this._opts
    };
  }
  // TODO: replace clone method with better possible alternate
  clone(item) {
    const me = this;
    if (!item) {
      return item;
    } // null, undefined values check
    let types = [Number, String, Boolean],
      result;
    // normalizing primitives if someone did new String('aaa'), or new Number('444');
    types.forEach(function (type) {
      if (item instanceof type) {
        result = type(item);
      }
    });
    if (typeof result == 'undefined') {
      if (Object.prototype.toString.call(item) === '[object Array]') {
        result = [];
        item.forEach(function (child, index, array) {
          result[index] = me.clone(child);
        });
      } else if (typeof item == 'object') {
        // testing that this is DOM
        if (item.nodeType && typeof item.cloneNode == 'function') {
          result = item.cloneNode(true);
        } else if (!item.prototype) {
          // check that this is a literal
          if (item instanceof Date) {
            result = new Date(item);
          } else {
            // it is an object literal
            result = {};
            for (var i in item) {
              result[i] = me.clone(item[i]);
            }
          }
        } else {
          if (false) {} else {
            result = item;
          }
        }
      } else {
        result = item;
      }
    }
    return result;
  }
  set froalaModel(content) {
    this.updateEditor(content);
  }
  // Update editor with model contents.
  updateEditor(content) {
    if (JSON.stringify(this._oldModel) == JSON.stringify(content)) {
      return;
    }
    if (!this._hasSpecialTag) {
      this._oldModel = content;
    } else {
      this._model = content;
    }
    if (this._editorInitialized) {
      if (!this._hasSpecialTag) {
        this._editor.html.set(content);
      } else {
        this.setContent();
      }
    } else {
      if (!this._hasSpecialTag) {
        this._element.innerHTML = content || '';
      } else {
        this.setContent();
      }
    }
  }
  // update model if editor contentChanged
  updateModel() {
    this.zone.run(() => {
      let modelContent = null;
      if (this._hasSpecialTag) {
        let attributeNodes = this._element.attributes;
        let attrs = {};
        for (let i = 0; i < attributeNodes.length; i++) {
          let attrName = attributeNodes[i].name;
          if (this._opts.angularIgnoreAttrs && this._opts.angularIgnoreAttrs.indexOf(attrName) != -1) {
            continue;
          }
          attrs[attrName] = attributeNodes[i].value;
        }
        if (this._element.innerHTML) {
          attrs[this.INNER_HTML_ATTR] = this._element.innerHTML;
        }
        modelContent = attrs;
      } else {
        let returnedHtml = this._editor.html.get();
        if (typeof returnedHtml === 'string') {
          modelContent = returnedHtml;
        }
      }
      if (this._oldModel !== modelContent) {
        this._oldModel = modelContent;
        // Update froalaModel.
        this.froalaModelChange.emit(modelContent);
        // Update form model.
        this.onChange(modelContent);
      }
    });
  }
  registerEvent(eventName, callback) {
    if (!eventName || !callback) {
      return;
    }
    if (!this._opts.events) {
      this._opts.events = {};
    }
    this._opts.events[eventName] = callback;
  }
  initListeners() {
    let self = this;
    // Check if we have events on the editor.
    if (this._editor.events) {
      // bind contentChange and keyup event to froalaModel
      this._editor.events.on('contentChanged', function () {
        self.updateModel();
      });
      this._editor.events.on('mousedown', function () {
        setTimeout(function () {
          self.onTouched();
        }, 0);
      });
      if (this._opts.immediateAngularModelUpdate) {
        this._editor.events.on('keyup', function () {
          setTimeout(function () {
            self.updateModel();
          }, 0);
        });
      }
    }
    this._editorInitialized = true;
  }
  createEditor() {
    if (this._editorInitialized) {
      return;
    }
    this.setContent(true);
    // init editor
    this.zone.runOutsideAngular(() => {
      // Add listeners on initialized event.
      if (!this._opts.events) this._opts.events = {};
      // Register initialized event.
      this.registerEvent('initialized', this._opts.events && this._opts.events.initialized);
      const existingInitCallback = this._opts.events.initialized;
      // Default initialized event.
      if (!this._opts.events.initialized || !this._opts.events.initialized.overridden) {
        this._opts.events.initialized = () => {
          this.initListeners();
          existingInitCallback && existingInitCallback.call(this._editor, this);
        };
        this._opts.events.initialized.overridden = true;
      }
      // Initialize the Froala Editor.
      this._editor = new (froala_editor__WEBPACK_IMPORTED_MODULE_0___default())(this._element, this._opts);
    });
  }
  setHtml() {
    this._editor.html.set(this._model || '');
    // This will reset the undo stack everytime the model changes externally. Can we fix this?
    this._editor.undo.reset();
    this._editor.undo.saveStep();
  }
  setContent(firstTime = false) {
    let self = this;
    // Set initial content
    if (this._model || this._model == '') {
      this._oldModel = this._model;
      if (this._hasSpecialTag) {
        let tags = this._model;
        // add tags on element
        if (tags) {
          for (let attr in tags) {
            if (tags.hasOwnProperty(attr) && attr != this.INNER_HTML_ATTR) {
              this._element.setAttribute(attr, tags[attr]);
            }
          }
          if (tags.hasOwnProperty(this.INNER_HTML_ATTR)) {
            this._element.innerHTML = tags[this.INNER_HTML_ATTR];
          }
        }
      } else {
        if (firstTime) {
          this.registerEvent('initialized', function () {
            self.setHtml();
          });
        } else {
          self.setHtml();
        }
      }
    }
  }
  destroyEditor() {
    if (this._editorInitialized) {
      this._editor.destroy();
      this._editorInitialized = false;
    }
  }
  getEditor() {
    if (this._element) {
      return this._editor;
    }
    return null;
  }
  // send manual editor initialization
  generateManualController() {
    let controls = {
      initialize: this.createEditor.bind(this),
      destroy: this.destroyEditor.bind(this),
      getEditor: this.getEditor.bind(this)
    };
    this.froalaInit.emit(controls);
  }
  // TODO not sure if ngOnInit is executed after @inputs
  ngAfterViewInit() {
    // check if output froalaInit is present. Maybe observers is private and should not be used?? TODO how to better test that an output directive is present.
    if (!this.froalaInit.observers.length) {
      this.createEditor();
    } else {
      this.generateManualController();
    }
  }
  ngOnDestroy() {
    this.destroyEditor();
  }
  setDisabledState(isDisabled) {}
}, _class.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
}], _class.propDecorators = {
  froalaEditor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  froalaModel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  froalaModelChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  froalaInit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }]
}, _class);
FroalaEditorDirective = FroalaEditorDirective_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
  selector: '[froalaEditor]',
  exportAs: 'froalaEditor',
  providers: [{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => FroalaEditorDirective_1),
    multi: true
  }],
  standalone: true
})], FroalaEditorDirective);


/***/ }),

/***/ 3161:
/*!*****************************************************!*\
  !*** ./projects/library/src/view/view.directive.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FroalaViewDirective: () => (/* binding */ FroalaViewDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;


let FroalaViewDirective = (_class = class FroalaViewDirective {
  constructor(renderer, element) {
    this.renderer = renderer;
    this._element = element.nativeElement;
  }
  set froalaView(content) {
    this._element.innerHTML = content;
  }
  ngAfterViewInit() {
    this.renderer.addClass(this._element, 'fr-view');
  }
}, _class.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}], _class.propDecorators = {
  froalaView: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
}, _class);
FroalaViewDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: '[froalaView]',
  standalone: true
})], FroalaViewDirective);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3885)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map