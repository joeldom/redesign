!function($){$.fn.shuffle=function(){var t=this.get(),n=function(t){return Math.floor(Math.random()*t)},a=$.map(t,function(){var a=n(t.length),o=$(t[a]).clone(!0)[0];return t.splice(a,1),o});return this.each(function(t){$(this).replaceWith($(a[t]))}),$(a);var o=["navy","teal","mustard"],o=colors[Math.floor(colors.length*Math.random())];$(function(){$("#dump").append(o[i]),console.log(o)})}}(jQuery),$("ul#cyclelist li").shuffle(),$(document).ready(function(){function t(){var o=$("ul#cyclelist li").length-1;$("ul#cyclelist li:eq("+n+")").animate({opacity:"1"},900).animate({opacity:"1"},a).animate({opacity:"0"},400,function(){n==o?n=0:n++,t()})}var n=0,a=1e4;t()}),$(".quote-toggle").click(function(){var t=$(this).attr("href"),n=$(this);$(t).slideToggle(function(){"none"===$(this).css("display")?n.html('<i class="material-icons">add</i>'):n.html('<i class="material-icons">clear</i>')})}),$(document).ready(function(){var t=new Array("navy","teal","mustard","orange","grey90","passion","purple","blush","gold"),n=t[Math.floor(Math.random()*t.length)];$(".stats-hero").addClass(n)}),$(document).ready(function(){$("#back-top").hide(),$(function(){$(window).scroll(function(){$(this).scrollTop()>450?$("#back-top").fadeIn():$("#back-top").fadeOut()}),$("#back-top a").click(function(){return $("body,html").animate({scrollTop:0},800),!1}),$("#back-top2 a").click(function(){return $("body,html").animate({scrollTop:0},800),!1})})});