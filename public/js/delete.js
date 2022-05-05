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

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n\n    Swal.fire({\n      title: 'Czy napewno usunąć rekord?',\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonColor: '#3085d6',\n      cancelButtonColor: '#d33',\n      confirmButtonText: 'Tak, usuń!'\n    }).then(function (result) {\n      if (result.isConfirmed) {\n        $.ajax({\n          method: \"DELETE\",\n          url: deleteUrl + $(_this).data(\"id\") //data: { id: $(this).data(\"id\"  }\n\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          Swal.fire({\n            icon: data.responseJSON.status,\n            title: 'Oops...',\n            text: data.responseJSON.message\n          });\n        });\n      }\n    });\n  });\n}); //$.ajax({\n//    method: \"DELETE\",\n//    url: \"/users/\" + $(this).data(\"id\"),\n//    //data: { id: $(this).data(\"id\" }\n//})\n//.done(function( response ) {\n//    window.location.reload();\n//})\n//.fail(function (response) {\n//    alert('ERROR');\n//});\n//console.log($(this).data(\"id\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiY2xpY2siLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImRlbGV0ZVVybCIsImRhdGEiLCJkb25lIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJmYWlsIiwicmVzcG9uc2VKU09OIiwic3RhdHVzIiwidGV4dCIsIm1lc3NhZ2UiXSwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2RlbGV0ZS5qcz82YzExIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuZGVsZXRlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDenkgbmFwZXdubyB1c3VuxIXEhyByZWtvcmQ/JyxcclxuICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdUYWssIHVzdcWEISdcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGRlbGV0ZVVybCArICQodGhpcykuZGF0YShcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2RhdGE6IHsgaWQ6ICQodGhpcykuZGF0YShcImlkXCIgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmZhaWwoZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogZGF0YS5yZXNwb25zZUpTT04uc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdPb3BzLi4uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGRhdGEucmVzcG9uc2VKU09OLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4vLyQuYWpheCh7XHJcbi8vICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuLy8gICAgdXJsOiBcIi91c2Vycy9cIiArICQodGhpcykuZGF0YShcImlkXCIpLFxyXG4vLyAgICAvL2RhdGE6IHsgaWQ6ICQodGhpcykuZGF0YShcImlkXCIgfVxyXG4vL30pXHJcbi8vLmRvbmUoZnVuY3Rpb24oIHJlc3BvbnNlICkge1xyXG4vLyAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbi8vfSlcclxuLy8uZmFpbChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuLy8gICAgYWxlcnQoJ0VSUk9SJyk7XHJcbi8vfSk7XHJcblxyXG4vL2NvbnNvbGUubG9nKCQodGhpcykuZGF0YShcImlkXCIpKTsiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUMsWUFBVztFQUNUQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEtBQWIsQ0FBbUIsWUFBVztJQUFBOztJQUkxQkMsSUFBSSxDQUFDQyxJQUFMLENBQVU7TUFDTkMsS0FBSyxFQUFFLDRCQUREO01BRU5DLElBQUksRUFBRSxTQUZBO01BR05DLGdCQUFnQixFQUFFLElBSFo7TUFJTkMsa0JBQWtCLEVBQUUsU0FKZDtNQUtOQyxpQkFBaUIsRUFBRSxNQUxiO01BTU5DLGlCQUFpQixFQUFFO0lBTmIsQ0FBVixFQU9HQyxJQVBILENBT1EsVUFBQ0MsTUFBRCxFQUFZO01BQ2hCLElBQUlBLE1BQU0sQ0FBQ0MsV0FBWCxFQUF3QjtRQUNwQlosQ0FBQyxDQUFDYSxJQUFGLENBQU87VUFDQ0MsTUFBTSxFQUFFLFFBRFQ7VUFFQ0MsR0FBRyxFQUFFQyxTQUFTLEdBQUdoQixDQUFDLENBQUMsS0FBRCxDQUFELENBQVFpQixJQUFSLENBQWEsSUFBYixDQUZsQixDQUdDOztRQUhELENBQVAsRUFLS0MsSUFMTCxDQUtVLFVBQVNELElBQVQsRUFBZTtVQUNqQkUsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtRQUNILENBUEwsRUFRS0MsSUFSTCxDQVFVLFVBQVNMLElBQVQsRUFBZTtVQUNqQmYsSUFBSSxDQUFDQyxJQUFMLENBQVU7WUFDTkUsSUFBSSxFQUFFWSxJQUFJLENBQUNNLFlBQUwsQ0FBa0JDLE1BRGxCO1lBRU5wQixLQUFLLEVBQUUsU0FGRDtZQUdOcUIsSUFBSSxFQUFFUixJQUFJLENBQUNNLFlBQUwsQ0FBa0JHO1VBSGxCLENBQVY7UUFNSCxDQWZMO01BZ0JIO0lBQ0osQ0ExQkQ7RUEyQkgsQ0EvQkQ7QUFnQ0gsQ0FqQ0EsQ0FBRCxDLENBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9kZWxldGUuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

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