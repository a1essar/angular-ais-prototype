/******/!function(e){function t(n){if(a[n])return a[n].exports;var o=a[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}// webpackBootstrap
/******/
var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";var n=a(1),o=a(2),r=a(3),i=a(4),l=a(5),s=a(6),c=a(7),u=a(8),h=a(9),d=angular.module("angularFormGenBased",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","ngStorage","fg","ngTable"]).config(n.config).config(o.routerConfig).run(r.runBlock).service("appStorage",u.StorageService).service("appLocalStorage",h.LocalStorageFactory).controller("MainController",i.MainController).controller("ReportController",l.ReportController).controller("ConstructorController",s.ConstructorController).directive("acmeNavbar",c.NavbarDirective);d.value("REPORTS",[{field3598:"Белгородская область",field3615:"Алексеевский ГСУ",field3632:"Автомобиль",field3689:"грузовой",field3687:"ГАЗ-53",field3666:"самосвал",field3691:"1985",field3693:"Да",field3706:"VIN",field3700:"ASJKDJL123123",field3737:"Тест 1",id:"eff0170d-d05f-beb6-56ac-3494bd3215eb"},{field3598:"Белгородская область",field3615:"Новооскольский ГСУ",field3632:"Комбайн",field3689:"зерноуборочный",field3687:"Terrion SR-2010",field3666:"станция техобслуживания",field3691:"1986",field3693:"Нет",field3706:"Сер.",field3700:"21312313",field3737:"Тест 2",id:"9fd42ce8-e793-5785-bd7d-e1fb8a12eb6b"},{field3598:"Белгородская область",field3615:"Октябрьский ГСУ",field3632:"Трактор",field3689:"грузовой",field3687:"ГАЗ-53",field3666:"бензовоз",field3691:"1987",field3693:"Да",field3706:"VIN",field3700:"ASDASD123",field3737:"Тест 3",id:"cb947c8e-0730-9a79-e182-1113a3c6fcea"}]),d.value("SCHEMA",{fields:[{type:"selectlist",name:"field3598",displayName:"Филиал",options:[{value:"Белгородская область",text:"Белгородская область",$$hashKey:"object:1512"}],value:"Белгородская область",$$hashKey:"object:1477",$$_invalid:!1,$_displayProperties:!1},{type:"selectlist",name:"field3615",displayName:"ГСУ",options:[{value:"Алексеевский ГСУ",text:"Алексеевский ГСУ",$$hashKey:"object:1954"},{value:"Новооскольский ГСУ",$$hashKey:"object:2549",text:"Новооскольский ГСУ"},{value:"Октябрьский ГСУ",$$hashKey:"object:2558",text:"Октябрьский ГСУ"}],value:"Алексеевский ГСУ",$$hashKey:"object:1919",$$_invalid:!1,$_displayProperties:!1},{type:"selectlist",name:"field3632",displayName:"Тип",options:[{value:"Автомобиль",text:"Автомобиль",$$hashKey:"object:2464"},{value:"Комбайн",$$hashKey:"object:2571",text:"Комбайн"},{value:"Комплект",$$hashKey:"object:2582",text:"Комплект"},{value:"Культиватор",$$hashKey:"object:2593",text:"Культиватор"},{value:"Машина семяочистительная",$$hashKey:"object:2604",text:"Машина семяочистительная"},{value:"Опрыскиватель",$$hashKey:"object:2615",text:"Опрыскиватель"},{value:"Сахариметр",$$hashKey:"object:2626",text:"Сахариметр"},{value:"Сеялка",$$hashKey:"object:2637",text:"Сеялка"},{value:"Сушилка",$$hashKey:"object:2648",text:"Сушилка"},{value:"Трактор",$$hashKey:"object:2659",text:"Трактор"},{value:"Хроматограф",$$hashKey:"object:2670",text:"Хроматограф"}],value:"Автомобиль",$$hashKey:"object:2429",$$_invalid:!1,$_displayProperties:!1},{type:"selectlist",name:"field3689",displayName:"Назначение",options:[{value:"грузовой",text:"грузовой",$$hashKey:"object:5148"},{value:"зерноуборочный",text:"зерноуборочный",$$hashKey:"object:5149"}],value:"грузовой",$_isDragging:!1,$$hashKey:"object:5113",$$_invalid:!1,$_displayProperties:!1},{type:"selectlist",name:"field3687",displayName:"Марка и модель",options:[{value:"ГАЗ-53",text:"ГАЗ-53",$$hashKey:"object:5027"},{value:"Terrion SR-2010",text:"Terrion SR-2010",$$hashKey:"object:5028"}],value:"ГАЗ-53",$$hashKey:"object:4992",$$_invalid:!1,$_displayProperties:!1},{type:"selectlist",name:"field3666",displayName:"Характеристика",options:[{value:"самосвал",text:"самосвал",$$hashKey:"object:3903"},{value:"станция техобслуживания",$$hashKey:"object:3980",text:"станция техобслуживания"},{value:"топливозаправщик",$$hashKey:"object:3991",text:"топливозаправщик"},{value:"бензовоз",$$hashKey:"object:4002",text:"бензовоз"},{value:"цистерна",$$hashKey:"object:4013",text:"цистерна"},{value:"кузов для перевозки пассажиров",$$hashKey:"object:4024",text:"кузов для перевозки пассажиров"},{value:"кран",$$hashKey:"object:4035",text:"кран"},{value:"Бычок",$$hashKey:"object:4046",text:"Бычок"},{value:"внедорожник",$$hashKey:"object:4057",text:"внедорожник"},{value:"грузопассажирский",$$hashKey:"object:4068",text:"грузопассажирский"},{value:"внедорожник удлинненный",$$hashKey:"object:4079",text:"внедорожник удлинненный"},{value:"АЗЛК, Москва",$$hashKey:"object:4090",text:"АЗЛК, Москва"},{value:"микроавтобус",$$hashKey:"object:4101",text:"микроавтобус"},{value:"гусеничный",$$hashKey:"object:4112",text:"гусеничный"},{value:"селекционный",$$hashKey:"object:4123",text:"селекционный"}],value:"самосвал",$$hashKey:"object:3866",$$_invalid:!1,$_displayProperties:!1,$_isDragging:!1},{type:"selectlist",name:"field3691",displayName:"Год изготовления",options:[{value:"1985",text:"1985",$$hashKey:"object:5269"},{value:"1986",text:"1986",$$hashKey:"object:5270"},{value:"1987",text:"1987",$$hashKey:"object:5271"},{value:"1988",$$hashKey:"object:5352",text:"1988"},{value:"1989",$$hashKey:"object:5363",text:"1989"},{value:"1990",$$hashKey:"object:5374",text:"1990"}],value:"1985",$_isDragging:!1,$$hashKey:"object:5234",$$_invalid:!1,$_displayProperties:!1},{type:"selectlist",name:"field3693",displayName:"Работоспособность",options:[{value:"Да",text:"Да",$$hashKey:"object:5421"},{value:"Нет",text:"Нет",$$hashKey:"object:5422"}],value:"Да",$_isDragging:!1,$$hashKey:"object:5386",$$_invalid:!1,$_displayProperties:!1},{type:"radiobuttonlist",name:"field3706",displayName:"Идентификационная информация: Тип",options:[{value:"VIN",text:"VIN",$$hashKey:"object:5859"},{value:"Сер.",text:"Сер.",$$hashKey:"object:5860"}],value:"VIN",$$hashKey:"object:5825",$$_invalid:!1,$_displayProperties:!1},{type:"text",name:"field3700",displayName:"Идентификационная информация: Номер",$$hashKey:"object:5552",$$_invalid:!1,validation:{messages:{pattern:"Только цифры и строчные латинские буквы"},pattern:"^[A-Z0-9_]*$"},$_isDragging:!1,$_displayProperties:!1,placeholder:"Пример: 112010030 или ХТН531400J1133295",$_redraw:!1,tooltip:"Пример: 112010030 или ХТН531400J1133295"},{type:"text",name:"field3737",displayName:"Пояснения",$$hashKey:"object:7631",$$_invalid:!1,validation:{messages:{}},$_displayProperties:!1,$_isDragging:!1}],$$_invalid:!0})},function(e,t){"use strict";function a(e){"ngInject";e.debugEnabled(!0)}Object.defineProperty(t,"__esModule",{value:!0}),t.config=a,a.$inject=["$logProvider"]},function(e,t){"use strict";function a(e,t){"ngInject";t.html5Mode({enabled:!0,requireBase:!1}),e.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).when("/report",{templateUrl:"app/report/report.html",controller:"ReportController",controllerAs:"report"}).when("/constructor",{templateUrl:"app/constructor/constructor.html",controller:"ConstructorController",controllerAs:"myConstructor"}).otherwise({redirectTo:"/"})}Object.defineProperty(t,"__esModule",{value:!0}),t.routerConfig=a,a.$inject=["$routeProvider","$locationProvider"]},function(e,t){"use strict";function a(e){"ngInject";e.debug("runBlock end")}Object.defineProperty(t,"__esModule",{value:!0}),t.runBlock=a,a.$inject=["$log"]},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=function(){function e(t,n,o){"ngInject";a(this,e),this.store=n,this.myFormData=t.myFormData={},t.mySchema=this.store.get("schema")||o}return e.$inject=["$scope","appStorage","SCHEMA"],n(e,[{key:"add",value:function(e){e.id=this.uniqueId(),console.log(e.id),this.store.insert("movable-property",angular.copy(e))}},{key:"uniqueId",value:function(e){function t(e){var t=(Math.random().toString(16)+"000000000").substr(2,8);return e?"-"+t.substr(0,4)+"-"+t.substr(4,4):t}return t()+t(!0)+t(!0)+t()}}]),e}();t.MainController=o},function(e,t){"use strict";function a(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function r(e,t,o,i,l){"ngInject";var s=this;n(this,r),this.store=t,this.store.get("movable-property")||this.store.set("movable-property",l),this.reports=this.store.get("movable-property")||l,this.schema=angular.copy(this.store.get("schema"))||i,this.schemaFields=this.schema.fields||i.fields,this.columns=[],this.schemaFields.forEach(function(e,t){var n={field:e.name,sortable:e.name,title:e.displayName,filter:a({},e.name,"text")};s.columns.push(n)}),console.log(this.columns,this.schemaFields),this.data=new o({page:1,count:10},{filterDelay:0,data:this.reports})};o.$inject=["$scope","appStorage","NgTableParams","SCHEMA","REPORTS"],t.ReportController=o},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=function(){function e(t,n,o){"ngInject";a(this,e),this.store=n,t.mySchema=this.store.get("schema")||o}return e.$inject=["$scope","appStorage","SCHEMA"],n(e,[{key:"updateSchema",value:function(e){this.store.set("schema",e),console.log("updateSchema",e)}}]),e}();t.ConstructorController=o},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){"ngInject";var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{},controller:i,controllerAs:"navbar",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();t.NavbarDirective=n;var r="",i=function(){function e(t,n){"ngInject";a(this,e),this.items=t.items=[{path:"/",title:"Добавить отчет"},{path:"/report",title:"Отчеты"},{path:"/constructor",title:"Конструктор"}],r=n.path()}return e.$inject=["$scope","$location"],o(e,[{key:"isActive",value:function(e){return e.path===r}}]),e}()},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function o(e,t){"ngInject";return a(this,o),t};n.$inject=["$http","appLocalStorage"],t.StorageService=n},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=void 0,r=function(){function e(t){"ngInject";a(this,e),o=t}return e.$inject=["$localStorage"],n(e,[{key:"get",value:function(e){return o[e]}},{key:"set",value:function(e,t){return o[e]=t}},{key:"insert",value:function(e,t){o[e]||(o[e]=[]),o[e].push(t)}}]),e}();t.LocalStorageFactory=r}]),angular.module("angularFormGenBased").run(["$templateCache",function(e){e.put("app/constructor/constructor.html",'<acme-navbar></acme-navbar><div class="container"><form class="form"><div fg-edit="" fg-schema="mySchema"></div><button class="btn btn-primary" ng-click="myConstructor.updateSchema(mySchema)" ng-class="{ disabled: mySchema.$invalid }">Сохранить</button></form></div>'),e.put("app/main/main.html",'<acme-navbar></acme-navbar><div class="container"><form novalidate="" class="form-horizontal" name="exampleForm"><fieldset><legend><div class="row"><div class="col-sm-12">Движимое имущество</div></div></legend><div fg-form="" fg-form-data="myFormData" fg-schema="mySchema"></div><button class="btn btn-primary" ng-click="main.add(myFormData)">Добавить</button></fieldset></form></div>'),e.put("app/report/report.html",'<acme-navbar></acme-navbar><div class="container-fluid"><table ng-table-dynamic="report.data with report.columns" show-filter="true" class="table table-bordered table-striped"><tr ng-repeat="row in $data track by row.id"><td ng-repeat="column in $columns" title="\'Тест\'">{{::row[column.field]}}</td></tr></table></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href=""><span class="glyphicon glyphicon-home"></span> АИС | Движимое имущество</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li ng-repeat="item in items" ng-class="{ active: navbar.isActive(item) }"><a ng-href="{{item.path}}">{{item.title}}</a></li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-a1cede265a.js.map
