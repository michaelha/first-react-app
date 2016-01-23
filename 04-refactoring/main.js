(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/mha/Documents/projects/first-react-app/04-refactoring/src/app.jsx":[function(require,module,exports){
var options = {
  thumbnailData:

  [{
  title: 'Read More',
  number: 32,
  imgURL:'http://placehold.it/500x300',
  header: 'Header Title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue in arcu quis malesuada. Etiam eu nulla magna. Sed vel nunc ipsum.'
},
{
title: 'Browse More',
number: 42,
imgURL:'http://placehold.it/500x300',
header: 'Header Title 2',
description: 'Hahaha ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue in arcu quis malesuada. Etiam eu nulla magna. Sed vel nunc ipsum.'
},{
title: 'Try This',
number: 32,
imgURL:'http://placehold.it/500x300',
header: 'Header Title',
description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue in arcu quis malesuada. Etiam eu nulla magna. Sed vel nunc ipsum.'
}


]}

// ask react to render this class
var element = React.createElement(ThumbnailList, options);

// when we ask react to render this class, we will tell it
// where to place the rendered element in the dom
//ReactDOM.render(element1, document.body);
React.render(element, document.querySelector('.container'));

},{}]},{},["/Users/mha/Documents/projects/first-react-app/04-refactoring/src/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWhhL0RvY3VtZW50cy9wcm9qZWN0cy9maXJzdC1yZWFjdC1hcHAvMDQtcmVmYWN0b3Jpbmcvc3JjL2FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLE9BQU8sR0FBRztBQUNkLEVBQUUsYUFBYTs7RUFFYixDQUFDO0VBQ0QsS0FBSyxFQUFFLFdBQVc7RUFDbEIsTUFBTSxFQUFFLEVBQUU7RUFDVixNQUFNLENBQUMsNkJBQTZCO0VBQ3BDLE1BQU0sRUFBRSxjQUFjO0VBQ3RCLFdBQVcsRUFBRSw2SUFBNkk7Q0FDM0o7QUFDRDtBQUNBLEtBQUssRUFBRSxhQUFhO0FBQ3BCLE1BQU0sRUFBRSxFQUFFO0FBQ1YsTUFBTSxDQUFDLDZCQUE2QjtBQUNwQyxNQUFNLEVBQUUsZ0JBQWdCO0FBQ3hCLFdBQVcsRUFBRSw4SUFBOEk7Q0FDMUosQ0FBQztBQUNGLEtBQUssRUFBRSxVQUFVO0FBQ2pCLE1BQU0sRUFBRSxFQUFFO0FBQ1YsTUFBTSxDQUFDLDZCQUE2QjtBQUNwQyxNQUFNLEVBQUUsY0FBYztBQUN0QixXQUFXLEVBQUUsNklBQTZJO0FBQzFKLENBQUM7QUFDRDs7QUFFQSxDQUFDLENBQUM7O0FBRUYsaUNBQWlDO0FBQ2pDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztBQUUxRCwwREFBMEQ7QUFDMUQsaURBQWlEO0FBQ2pELDJDQUEyQztBQUMzQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIG9wdGlvbnMgPSB7XG4gIHRodW1ibmFpbERhdGE6XG5cbiAgW3tcbiAgdGl0bGU6ICdSZWFkIE1vcmUnLFxuICBudW1iZXI6IDMyLFxuICBpbWdVUkw6J2h0dHA6Ly9wbGFjZWhvbGQuaXQvNTAweDMwMCcsXG4gIGhlYWRlcjogJ0hlYWRlciBUaXRsZScsXG4gIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGhhc2VsbHVzIGNvbmd1ZSBpbiBhcmN1IHF1aXMgbWFsZXN1YWRhLiBFdGlhbSBldSBudWxsYSBtYWduYS4gU2VkIHZlbCBudW5jIGlwc3VtLidcbn0sXG57XG50aXRsZTogJ0Jyb3dzZSBNb3JlJyxcbm51bWJlcjogNDIsXG5pbWdVUkw6J2h0dHA6Ly9wbGFjZWhvbGQuaXQvNTAweDMwMCcsXG5oZWFkZXI6ICdIZWFkZXIgVGl0bGUgMicsXG5kZXNjcmlwdGlvbjogJ0hhaGFoYSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQaGFzZWxsdXMgY29uZ3VlIGluIGFyY3UgcXVpcyBtYWxlc3VhZGEuIEV0aWFtIGV1IG51bGxhIG1hZ25hLiBTZWQgdmVsIG51bmMgaXBzdW0uJ1xufSx7XG50aXRsZTogJ1RyeSBUaGlzJyxcbm51bWJlcjogMzIsXG5pbWdVUkw6J2h0dHA6Ly9wbGFjZWhvbGQuaXQvNTAweDMwMCcsXG5oZWFkZXI6ICdIZWFkZXIgVGl0bGUnLFxuZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQaGFzZWxsdXMgY29uZ3VlIGluIGFyY3UgcXVpcyBtYWxlc3VhZGEuIEV0aWFtIGV1IG51bGxhIG1hZ25hLiBTZWQgdmVsIG51bmMgaXBzdW0uJ1xufVxuXG5cbl19XG5cbi8vIGFzayByZWFjdCB0byByZW5kZXIgdGhpcyBjbGFzc1xudmFyIGVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFRodW1ibmFpbExpc3QsIG9wdGlvbnMpO1xuXG4vLyB3aGVuIHdlIGFzayByZWFjdCB0byByZW5kZXIgdGhpcyBjbGFzcywgd2Ugd2lsbCB0ZWxsIGl0XG4vLyB3aGVyZSB0byBwbGFjZSB0aGUgcmVuZGVyZWQgZWxlbWVudCBpbiB0aGUgZG9tXG4vL1JlYWN0RE9NLnJlbmRlcihlbGVtZW50MSwgZG9jdW1lbnQuYm9keSk7XG5SZWFjdC5yZW5kZXIoZWxlbWVudCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpKTtcbiJdfQ==
