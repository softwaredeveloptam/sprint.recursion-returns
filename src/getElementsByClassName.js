const getElementsByClassName = (target) => {
  let result = [];
  let length = target.length;

  function recursive(className) {
    if (target[length] == className) {
      // exit
      result.push(className);
    } else if (length == 0) {
    } else {
      recursive(className, length - 1); // recursion
    }
  }

  return result;
};

/*
let obj = {};

[
  HTMLBodyElement {},
  HTMLDivElement {},
  HTMLButtonElement {},
  HTMLParagraphElement {},
  HTMLParagraphElement {},
  HTMLParagraphElement {}
]

'<div class="a">
    <p class="targetClassName asdf"><b>aasdfasdfsdfasdf</b></p>
 </div>
 <div class="classname">
  <span class="span test"></span>
</div>'

//How does the dom should look like??
{
  {
    {

    }
  },
  {
    {

    }
  },
}
*/

/*

const htmlStrings = [
  "<p></p>",
  '<div><div class="testing"></div></div>',
  '<div><div class="targetClassName"></div></div>',
  '<div><button class="targetClassName"></button></div><div class="classname"></div>',
  '<div><p class="targetClassName"><b>asdfasdf</b></p></div><div class="classname"><span></span></div>',
  '<div><p class="targetClassName"><b>asdfasdf</b></p></div><div class="classname"><span class="span test"></span></div>',
  '<div class="a"><p class="targetClassName asdf"><b>aasdfasdfsdfasdf</b></p></div><div class="classname"><span class="span test"></span></div>',
]
*/

module.exports = { getElementsByClassName };
