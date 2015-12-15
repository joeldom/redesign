(function () {var requirejs,require,define;(function(undef){var main,req,makeMap,handlers,defined={},waiting={},config={},defining={},hasOwn=Object.prototype.hasOwnProperty,aps=[].slice,jsSuffixRegExp=/\.js$/;function hasProp(obj,prop){return hasOwn.call(obj,prop)}function normalize(name,baseName){var nameParts,nameSegment,mapValue,foundMap,lastIndex,foundI,foundStarMap,starI,i,j,part,baseParts=baseName&&baseName.split("/"),map=config.map,starMap=map&&map["*"]||{};if(name&&name.charAt(0)==="."){if(baseName){name=name.split("/");lastIndex=name.length-1;if(config.nodeIdCompat&&jsSuffixRegExp.test(name[lastIndex])){name[lastIndex]=name[lastIndex].replace(jsSuffixRegExp,"")}name=baseParts.slice(0,baseParts.length-1).concat(name);for(i=0;i<name.length;i+=1){part=name[i];if(part==="."){name.splice(i,1);i-=1}else if(part===".."){if(i===1&&(name[2]===".."||name[0]==="..")){break}else if(i>0){name.splice(i-1,2);i-=2}}}name=name.join("/")}else if(name.indexOf("./")===0){name=name.substring(2)}}if((baseParts||starMap)&&map){nameParts=name.split("/");for(i=nameParts.length;i>0;i-=1){nameSegment=nameParts.slice(0,i).join("/");if(baseParts){for(j=baseParts.length;j>0;j-=1){mapValue=map[baseParts.slice(0,j).join("/")];if(mapValue){mapValue=mapValue[nameSegment];if(mapValue){foundMap=mapValue;foundI=i;break}}}}if(foundMap){break}if(!foundStarMap&&starMap&&starMap[nameSegment]){foundStarMap=starMap[nameSegment];starI=i}}if(!foundMap&&foundStarMap){foundMap=foundStarMap;foundI=starI}if(foundMap){nameParts.splice(0,foundI,foundMap);name=nameParts.join("/")}}return name}function makeRequire(relName,forceSync){return function(){var args=aps.call(arguments,0);if(typeof args[0]!=="string"&&args.length===1){args.push(null)}return req.apply(undef,args.concat([relName,forceSync]))}}function makeNormalize(relName){return function(name){return normalize(name,relName)}}function makeLoad(depName){return function(value){defined[depName]=value}}function callDep(name){if(hasProp(waiting,name)){var args=waiting[name];delete waiting[name];defining[name]=true;main.apply(undef,args)}if(!hasProp(defined,name)&&!hasProp(defining,name)){throw new Error("No "+name)}return defined[name]}function splitPrefix(name){var prefix,index=name?name.indexOf("!"):-1;if(index>-1){prefix=name.substring(0,index);name=name.substring(index+1,name.length)}return[prefix,name]}makeMap=function(name,relName){var plugin,parts=splitPrefix(name),prefix=parts[0];name=parts[1];if(prefix){prefix=normalize(prefix,relName);plugin=callDep(prefix)}if(prefix){if(plugin&&plugin.normalize){name=plugin.normalize(name,makeNormalize(relName))}else{name=normalize(name,relName)}}else{name=normalize(name,relName);parts=splitPrefix(name);prefix=parts[0];name=parts[1];if(prefix){plugin=callDep(prefix)}}return{f:prefix?prefix+"!"+name:name,n:name,pr:prefix,p:plugin}};function makeConfig(name){return function(){return config&&config.config&&config.config[name]||{}}}handlers={require:function(name){return makeRequire(name)},exports:function(name){var e=defined[name];if(typeof e!=="undefined"){return e}else{return defined[name]={}}},module:function(name){return{id:name,uri:"",exports:defined[name],config:makeConfig(name)}}};main=function(name,deps,callback,relName){var cjsModule,depName,ret,map,i,args=[],callbackType=typeof callback,usingExports;relName=relName||name;if(callbackType==="undefined"||callbackType==="function"){deps=!deps.length&&callback.length?["require","exports","module"]:deps;for(i=0;i<deps.length;i+=1){map=makeMap(deps[i],relName);depName=map.f;if(depName==="require"){args[i]=handlers.require(name)}else if(depName==="exports"){args[i]=handlers.exports(name);usingExports=true}else if(depName==="module"){cjsModule=args[i]=handlers.module(name)}else if(hasProp(defined,depName)||hasProp(waiting,depName)||hasProp(defining,depName)){args[i]=callDep(depName)}else if(map.p){map.p.load(map.n,makeRequire(relName,true),makeLoad(depName),{});args[i]=defined[depName]}else{throw new Error(name+" missing "+depName)}}ret=callback?callback.apply(defined[name],args):undefined;if(name){if(cjsModule&&cjsModule.exports!==undef&&cjsModule.exports!==defined[name]){defined[name]=cjsModule.exports}else if(ret!==undef||!usingExports){defined[name]=ret}}}else if(name){defined[name]=callback}};requirejs=require=req=function(deps,callback,relName,forceSync,alt){if(typeof deps==="string"){if(handlers[deps]){return handlers[deps](callback)}return callDep(makeMap(deps,callback).f)}else if(!deps.splice){config=deps;if(config.deps){req(config.deps,config.callback)}if(!callback){return}if(callback.splice){deps=callback;callback=relName;relName=null}else{deps=undef}}callback=callback||function(){};if(typeof relName==="function"){relName=forceSync;forceSync=alt}if(forceSync){main(undef,deps,callback,relName)}else{setTimeout(function(){main(undef,deps,callback,relName)},4)}return req};req.config=function(cfg){return req(cfg)};requirejs._defined=defined;define=function(name,deps,callback){if(typeof name!=="string"){throw new Error("See almond README: incorrect module build, no module name")}if(!deps.splice){callback=deps;deps=[]}if(!hasProp(defined,name)&&!hasProp(waiting,name)){waiting[name]=[name,deps,callback]}};define.amd={jQuery:true}})();
define("almond", function(){});

define('reduce',[], function (){
	return function reduce(list, iteratee, memo){
		list.forEach(function (item){
			memo = iteratee(item, memo);
		});
		return memo;
	};
});

define('add',[], function (){
	return function add(a, b){
		return a + b;
	};
});

define('sum',["./reduce", "./add"], function (reduce, add){
	return function sum(list){
		return reduce(list, add, 0);
	};
});

require(["./sum"], function (sum) {
	var numbers = [1, 2, 3];
	var result = sum(numbers);

  // This check is required when using the r.js optimizer,
	// because it actually runs the code in Node.
  if(typeof document !== 'undefined'){
		var outputElement = document.getElementById("output");
		outputElement.innerHTML = result;
	}
});

define("main", function(){});

}());