/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/delete.js":
/*!********************************!*\
  !*** ./resources/js/delete.js ***!
  \********************************/
/***/ (() => {

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n\n    Swal.fire({\n      title: 'Czy napewno usunąć rekord?',\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonColor: '#3085d6',\n      cancelButtonColor: '#d33',\n      confirmButtonText: 'Tak, usuń!'\n    }).then(function (result) {\n      if (result.isConfirmed) {\n        $.ajax({\n          method: \"DELETE\",\n          url: deleteUrl + $(_this).data(\"id\") //data: { id: $(this).data(\"id\"  }\n\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          Swal.fire({\n            icon: data.responseJSON.status,\n            title: 'Oops...',\n            text: data.responseJSON.message\n          });\n        });\n      }\n    });\n  });\n}); //$.ajax({\n//    method: \"DELETE\",\n//    url: \"/users/\" + $(this).data(\"id\"),\n//    //data: { id: $(this).data(\"id\" }\n//})\n//.done(function( response ) {\n//    window.location.reload();\n//})\n//.fail(function (response) {\n//    alert('ERROR');\n//});\n//console.log($(this).data(\"id\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzLmpzIiwibmFtZXMiOlsiJCIsImNsaWNrIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJkZWxldGVVcmwiLCJkYXRhIiwiZG9uZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZmFpbCIsInJlc3BvbnNlSlNPTiIsInN0YXR1cyIsInRleHQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzPzZjMTEiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcclxuICAgICQoJy5kZWxldGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHJcblxyXG5cclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0N6eSBuYXBld25vIHVzdW7EhcSHIHJla29yZD8nLFxyXG4gICAgICAgICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1RhaywgdXN1xYQhJ1xyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogZGVsZXRlVXJsICsgJCh0aGlzKS5kYXRhKFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZGF0YTogeyBpZDogJCh0aGlzKS5kYXRhKFwiaWRcIiAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuZmFpbChmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBkYXRhLnJlc3BvbnNlSlNPTi5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ09vcHMuLi4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZGF0YS5yZXNwb25zZUpTT04ubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8vJC5hamF4KHtcclxuLy8gICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4vLyAgICB1cmw6IFwiL3VzZXJzL1wiICsgJCh0aGlzKS5kYXRhKFwiaWRcIiksXHJcbi8vICAgIC8vZGF0YTogeyBpZDogJCh0aGlzKS5kYXRhKFwiaWRcIiB9XHJcbi8vfSlcclxuLy8uZG9uZShmdW5jdGlvbiggcmVzcG9uc2UgKSB7XHJcbi8vICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuLy99KVxyXG4vLy5mYWlsKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4vLyAgICBhbGVydCgnRVJST1InKTtcclxuLy99KTtcclxuXHJcbi8vY29uc29sZS5sb2coJCh0aGlzKS5kYXRhKFwiaWRcIikpOyJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQyxZQUFXO0VBQ1RBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUMsS0FBYixDQUFtQixZQUFXO0lBQUE7O0lBSTFCQyxJQUFJLENBQUNDLElBQUwsQ0FBVTtNQUNOQyxLQUFLLEVBQUUsNEJBREQ7TUFFTkMsSUFBSSxFQUFFLFNBRkE7TUFHTkMsZ0JBQWdCLEVBQUUsSUFIWjtNQUlOQyxrQkFBa0IsRUFBRSxTQUpkO01BS05DLGlCQUFpQixFQUFFLE1BTGI7TUFNTkMsaUJBQWlCLEVBQUU7SUFOYixDQUFWLEVBT0dDLElBUEgsQ0FPUSxVQUFDQyxNQUFELEVBQVk7TUFDaEIsSUFBSUEsTUFBTSxDQUFDQyxXQUFYLEVBQXdCO1FBQ3BCWixDQUFDLENBQUNhLElBQUYsQ0FBTztVQUNDQyxNQUFNLEVBQUUsUUFEVDtVQUVDQyxHQUFHLEVBQUVDLFNBQVMsR0FBR2hCLENBQUMsQ0FBQyxLQUFELENBQUQsQ0FBUWlCLElBQVIsQ0FBYSxJQUFiLENBRmxCLENBR0M7O1FBSEQsQ0FBUCxFQUtLQyxJQUxMLENBS1UsVUFBU0QsSUFBVCxFQUFlO1VBQ2pCRSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO1FBQ0gsQ0FQTCxFQVFLQyxJQVJMLENBUVUsVUFBU0wsSUFBVCxFQUFlO1VBQ2pCZixJQUFJLENBQUNDLElBQUwsQ0FBVTtZQUNORSxJQUFJLEVBQUVZLElBQUksQ0FBQ00sWUFBTCxDQUFrQkMsTUFEbEI7WUFFTnBCLEtBQUssRUFBRSxTQUZEO1lBR05xQixJQUFJLEVBQUVSLElBQUksQ0FBQ00sWUFBTCxDQUFrQkc7VUFIbEIsQ0FBVjtRQU1ILENBZkw7TUFnQkg7SUFDSixDQTFCRDtFQTJCSCxDQS9CRDtBQWdDSCxDQWpDQSxDQUFELEMsQ0FvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIn0=\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/delete.js"]();
/******/ 	
/******/ })()
;