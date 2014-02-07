
(function() {
  var style = "width: 50%; padding: 0; margin: 0 0 10px; border: none; font-size: 8px; position: fixed; top: 0; background: none; right: 0;";
  var title = document.querySelector("#short_desc_nonedit_display");
  if (!title) return;
  title = title.textContent;
  var href = document.querySelector("#shorturl");
  if (!href) return;
  href = href.href;
  var wrapper = document.querySelector(".wrapper");
  var input = document.createElement("input");
  input.value = href + " - " + title;
  input.setAttribute("style", style);
  wrapper.appendChild(input);
})();

