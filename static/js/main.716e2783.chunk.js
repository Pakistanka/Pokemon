(this.webpackJsonpttpokemon=this.webpackJsonpttpokemon||[]).push([[0],{14:function(e,t,a){e.exports={wrapper:"PokemonDetails_wrapper__2O-sb",pName:"PokemonDetails_pName__2mH9R",pokeImg:"PokemonDetails_pokeImg__3t6Li",pTypes:"PokemonDetails_pTypes__2SAqr",types_wrapper:"PokemonDetails_types_wrapper__Vidau",pAbilities:"PokemonDetails_pAbilities__2pZXN",button:"PokemonDetails_button__1feUs"}},17:function(e,t,a){e.exports={ability_wrapper:"PokemonAbilities_ability_wrapper__1cUa7",ability_details:"PokemonAbilities_ability_details__GQECZ",ability_name:"PokemonAbilities_ability_name__3Q6Ni",ability_button:"PokemonAbilities_ability_button__1AABg"}},22:function(e,t,a){e.exports={wrapper:"PokemonList_wrapper__1P7cU",pCard:"PokemonList_pCard__2NCeb",pName:"PokemonList_pName__3uD0m",button:"PokemonList_button__204wG"}},23:function(e,t,a){e.exports={wrapper:"Search_wrapper__2fjP3",input:"Search_input__K2AWf"}},41:function(e,t,a){e.exports=a(69)},46:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(19),r=a.n(o),p=a(25),c=(a(46),a(9)),s=a(10),l=a(13),u=a(12),m=a(2),b=a(21),h=a.n(b),_=a(11),k=a(22),y=a.n(k),f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).pokemonClickHandler=function(t){e.props.onPokemonClicked(t),e.props.history.push("/details")},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){null===this.props.pokemons&&this.props.onInitPokemons()}},{key:"render",value:function(){var e=this,t=i.a.createElement("div",null,"Loading..."),a=this.props.search,n=this.props.pokemons;return a&&(n=this.props.pokemons.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))),this.props.pokemons&&(t=n.map((function(t){return i.a.createElement("div",{className:y.a.pCard,key:t.name,onClick:function(){return e.pokemonClickHandler(t.url)}},i.a.createElement("div",{className:y.a.pName},t.name))}))),i.a.createElement("div",null,i.a.createElement("div",{className:y.a.wrapper},t))}}]),a}(n.Component),d=Object(_.b)((function(e){return{pokemons:e.pokemons,search:e.search}}),(function(e){return{onInitPokemons:function(){return e((function(e){h.a.get("https://pokeapi.co/api/v2/pokemon/").then((function(t){e({type:"SET_POKEMONS",pokemons:t.data.results})})).catch((function(e){console.log("An error while getting data!")}))}))},onPokemonClicked:function(t){return e(function(e){return function(t){h.a.get(e).then((function(e){t({type:"SET_POKEMON_DETAILS",pokemonDetails:e.data})})).catch((function(e){console.log("An error while getting data!")}))}}(t))}}}))(f),E=a(14),O=a.n(E),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).abilityClickHandler=function(t){e.props.onAbilityClicked(t),e.props.history.push("/ability")},e.backClickhandler=function(){e.props.GoToListHandler(),e.props.history.push("/")},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t="",a="",n=null,o="https://pokeres.bastionbot.org/images/pokemon/".concat(this.props.pId,".png");return this.props.pName&&(n=i.a.createElement("div",{className:O.a.pName},this.props.pName)),this.props.pType&&(t=this.props.pType.map((function(e){return i.a.createElement("div",{className:O.a.pTypes,key:e.type.name},e.type.name)}))),this.props.pAbilities&&(a=this.props.pAbilities.map((function(t){return i.a.createElement("ul",{className:O.a.pTypes+" "+O.a.pAbilities,key:t.ability.name,onClick:function(){return e.abilityClickHandler(t.ability.url)}},t.ability.name)}))),i.a.createElement("div",null,i.a.createElement("div",{className:O.a.wrapper},i.a.createElement("button",{onClick:this.backClickhandler,className:O.a.button},"Back"),i.a.createElement("h3",null,n),i.a.createElement("img",{className:O.a.pokeImg,src:o,alt:"PokeImg"}),i.a.createElement("div",{className:O.a.types_wrapper},"Types: ",t),i.a.createElement("div",null,"Weight: ",this.props.pWeight," kg"),i.a.createElement("div",null,"Height: ",this.props.pHeight," ft"),i.a.createElement("div",null,"Experience: ",this.props.pExperience),i.a.createElement("div",{className:O.a.types_wrapper},"Abilitis: ",a)))}}]),a}(n.Component),D=Object(_.b)((function(e){return{pName:e.pokemonDetails.name,pWeight:e.pokemonDetails.weight,pHeight:e.pokemonDetails.height,pExperience:e.pokemonDetails.base_experience,pType:e.pokemonDetails.types,pAbilities:e.pokemonDetails.abilities,pId:e.pokemonDetails.id}}),(function(e){return{onAbilityClicked:function(t){return e(function(e){return function(t){h.a.get(e).then((function(e){t({type:"SET_ABILITY_DETAILS",abilityDetails:e.data})})).catch((function(e){console.log("An error while getting data!")}))}}(t))},GoToListHandler:function(){return e({type:"GO_TO_LIST_BACK"})}}}))(v),A=a(17),N=a.n(A),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).backClickhandler=function(){e.props.GoToDetailsHandler(),e.props.history.push("/details")},e}return Object(s.a)(a,[{key:"render",value:function(){var e="";return this.props.aDetails&&(e=this.props.aDetails.slice(1).map((function(e){return i.a.createElement("div",{className:N.a.pTypes,key:e.effect},e.effect)}))),i.a.createElement("div",{className:N.a.ability_wrapper},i.a.createElement("button",{className:N.a.ability_button,onClick:this.backClickhandler},"Back"),i.a.createElement("div",{className:N.a.ability_name},this.props.aName),i.a.createElement("div",{className:N.a.ability_details},e))}}]),a}(n.Component),j=Object(_.b)((function(e){return{aName:e.abilityDetails.name,aDetails:e.abilityDetails.effect_entries}}),(function(e){return{GoToDetailsHandler:function(){return e({type:"GO_TO_DETAILS_BACK"})}}}))(g),T=a(23),w=a.n(T),C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).searchHandler=function(t){t.preventDefault(),e.props.history.push("/"),e.props.onInitSearchPokemon(e.props.searchText)},e._handleKeyDown=function(t){"Enter"===t.key&&(e.props.history.push("/"),e.props.onInitSearchPokemon(e.props.searchText))},e}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:w.a.wrapper},i.a.createElement("div",{className:w.a.No},i.a.createElement("input",{className:w.a.input,placeholder:"Filter by name...",type:"text",value:this.props.searchText,onChange:this.props.newSearch,onKeyDown:this._handleKeyDown})))}}]),a}(n.Component),P=Object(_.b)((function(e){return{searchText:e.search}}),(function(e){return{newSearch:function(t){e({type:"SEARCH_BY_VALUE",text:t.target.value})}}}))(C),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(m.b,{exact:!0,path:"/",component:P}),i.a.createElement(m.b,{exact:!0,path:"/",component:d}),i.a.createElement(m.b,{exact:!0,path:"/details",component:D}),i.a.createElement(m.b,{exact:!0,path:"/ability",component:j}),i.a.createElement(m.a,{to:"/"}))}}]),a}(n.Component),I=a(16),L=a(7),x={search:"",pokemons:null,pokemonDetails:"",abilityDetails:"",pokemonUrl:""},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_BY_VALUE":return Object(L.a)(Object(L.a)({},e),{},{search:t.text});case"GO_TO_LIST_BACK":return Object(L.a)(Object(L.a)({},e),{},{pokemonDetails:""});case"GO_TO_DETAILS_BACK":return Object(L.a)(Object(L.a)({},e),{},{abilityDetails:""});case"SET_POKEMONS":return Object(L.a)(Object(L.a)({},e),{},{pokemons:t.pokemons});case"SET_POKEMON_DETAILS":return Object(L.a)(Object(L.a)({},e),{},{pokemonDetails:t.pokemonDetails});case"SET_ABILITY_DETAILS":return Object(L.a)(Object(L.a)({},e),{},{abilityDetails:t.abilityDetails});default:return e}},B=a(40),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.c,G=Object(I.d)(H,K(Object(I.a)(B.a)));r.a.render(i.a.createElement(_.a,{store:G},i.a.createElement(p.a,null,i.a.createElement(S,null))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.716e2783.chunk.js.map