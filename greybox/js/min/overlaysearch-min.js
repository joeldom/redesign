$(document).ready(function(){var c=$("#overlay-search");$("#search, #nav-search").click(function(){c.is(":visible")?c.fadeOut():c.fadeIn()}),$("#close").click(function(){c.fadeOut()})}),$(document).on("keydown",function(){var c=$('input[name="Search"]');c.is(":focus")||c.focus()});