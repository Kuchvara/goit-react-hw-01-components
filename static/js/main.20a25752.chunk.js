(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(A,e,a){A.exports={profile:"Profile_profile__3ElKO",avatar:"Profile_avatar__3L5Ai",description:"Profile_description__JdrBY",stats:"Profile_stats__V3tj5"}},function(A,e,a){A.exports={item:"FriendListItem_item__3C-uN",avatar:"FriendListItem_avatar__34T_m",online:"FriendListItem_online__3H0wO"}},function(A){A.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(A,e,a){A.exports={statistics:"Statistics_statistics__1lN3S",item:"Statistics_item__2CIB2",percentage:"Statistics_percentage__1ySAb"}},function(A,e,a){A.exports={transactionHistory:"TransactionHistory_transactionHistory__WF--c",item:"TransactionHistory_item__3zgQq"}},,,function(A){A.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,function(A,e,a){A.exports={friendList:"FriendList_friendList__6XOIA"}},function(A){A.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(A){A.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,function(A,e,a){},function(A,e,a){"use strict";a.r(e);var t=a(6),s=a.n(t),c=a(9),i=a.n(c),n=a(1),r=a.n(n),d=a(0),g=function(A){return Object(d.jsxs)("div",{className:r.a.profile,children:[Object(d.jsxs)("div",{className:r.a.description,children:[Object(d.jsx)("img",{src:A.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:r.a.avatar}),Object(d.jsx)("p",{className:r.a.description,children:A.location}),Object(d.jsx)("p",{className:r.a.description,children:A.name}),Object(d.jsxs)("p",{className:r.a.description,children:["@",A.tag]})]}),Object(d.jsxs)("ul",{className:"stats",children:[Object(d.jsxs)("li",{className:r.a.stats,children:[Object(d.jsx)("span",{children:"Followers"}),Object(d.jsxs)("span",{className:"quantity",children:[" ",A.stats.followers]})]}),Object(d.jsxs)("li",{className:r.a.stats,children:[Object(d.jsx)("span",{children:"Views"}),Object(d.jsxs)("span",{className:"quantity",children:[" ",A.stats.views]})]}),Object(d.jsxs)("li",{className:r.a.stats,children:[Object(d.jsx)("span",{children:"Likes"}),Object(d.jsxs)("span",{className:"quantity",children:[" ",A.stats.likes]})]})]})]})};g.defaultProps={avatar:"data:image/png;base64,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"};var l=g,o=a(4),B=a.n(o),u=function(A){var e=A.title,a=A.stats;return Object(d.jsxs)("section",{className:B.a.statistics,children:[e&&Object(d.jsx)("h2",{className:"title",children:e}),Object(d.jsx)("ul",{className:"stat-list",children:a.map((function(A){return Object(d.jsxs)("li",{className:B.a.item,children:[Object(d.jsx)("span",{className:B.a.label,children:A.label}),Object(d.jsxs)("span",{className:B.a.percentage,children:[" ",A.percentage,"%"]})]},A.id)}))})]})},j=a(2),w=a.n(j),Q=function(A){var e=A.avatar,a=A.name,t=A.isOnline,s=[w.a.item];return t&&s.push(w.a.online),Object(d.jsxs)("li",{className:s.join(" "),children:[Object(d.jsx)("span",{className:w.a.status,children:t}),Object(d.jsx)("img",{className:w.a.avatar,src:e,alt:"",width:"48"}),Object(d.jsx)("p",{className:w.a.name,children:a})]})};Q.defaultProps={avatar:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAABlVBMVEUAMWsAMGsAAAAAMWr/qv+ZmZv+GAD/mgD/8ABoRP4AkP8n3AH+zZX/qv0DMGP/zZj///8ABQ8ALmz/o5j+yKtra2wAk///0qD/SphsQP6einaSkpQCESQ4ODjuw5SGhoYAjP/6KQFZJkfdHxU4Y/5VVVYAIGIFHDuoknD9uNX6juReRPH8gg5CPsQAI2AWgv75zwbt8vZU2QMAGF0AKFf0ar3zrPOg5wUZwlktLS3M1uD5W634TZ6yxtRgYGH/s/8Npbmjsb6rmZnwpZ4ORG5HR0gAE1+pcqgKa7r8suI2NA01JzVcdZiGmbEEJUwYGBj2e84nGhGvr6+7eRa8tR4Lh+j+vcaNZ4zoHAsvxxHUoKKjcXA3VoDTkdAifAb+5QbwpKtfRN/+wLn6rQR6YlANNFaGFAa5GA16UHfZ7AWcLl8Ak+MHmdgQgdUeADwwTIAAAFxshqAZJjhvXmsNTQibjxIfAANEMCEDGgMNqaMfWY3au512FROSYk+4ax+5nB08ZQoyPwpEWEV/jRVwcBtFM5NRRjWkaI0fAAAT0UlEQVR4nO1dCWMctRUeWQ4l6c7YnsSJgw0O0KxDTJeaXae1HcdNAoY0cZykJYQSSjHQCxKuUgr0vn539XSNzpFmdma93vaDeDV60qz06enpjUbSJkmSIPIvwQIQptfiz6QDJ4deSyz+2IERyDH7HxE9QAg1Wa+jAcR5QOy/SgwICqHj0P9lN1L/BeVHHoQ3zJljAZwwLjm5EXJ6Rf8rWoJ9INSunEWQItXRgAkDSpy1xyHQRDK1+FPNHh0ugq3uKeMYFL1h+DRAmDEloJi49otFOmiv3+13pdVo9vYBuZsAEWjCjAvrhBSjJa5oAOe9ve3t7avdwohp8lD+UjkrQonxKzor9gZQkihMegIl8gBBOO9uz87Obu62aqKxpz3DRhALkqRrhdkfGV0uDyJDgoBDMDvB+osySU0w8idBeaGprgBGea/3KSXg0xyTSxizrYT+/AE5LQRC4sJVwspIrEC5nH2/BxlGtwiugg2AQIZKk1dGlAqoNp/9UaPr637EcxjKUY80/uytT/u7DyHwMG/DWeMPxIl4NFKKHdsDhi8AsgOktUn/pwT0svwWBF7hrcblzmyV5GMOGAEYAYkgIHbwqIBxdukw6q0BAbtd3gUaHwmkUojrqkaiXZBOln2Y9bfX1tY2uxlBK81FKlpyWyT6ixJASqBdwEiQ7zI/IM/zJK9IQKyhYhYQw9QQHyhZoE6ZGwXCZCTsMwIiPSfMGpR8iKE2lEH7wvHqAglUBDMC+tQLisqA4OGJ6EucukBFxUNOkmjuE1cLOeDzgHI9VN2iQL6kd2tvb++zXmRzYIweXiUZ8hzFTWxTAniFTFHV0rYAUp+k1+118/gcbMjMkKNGIaDC1UzGpAswM4Dz+LLkjIAPswoESNdct/BjQQBDhabMKhIwzo5QHZAHyFtrm5ubQEBkjmIYnASQHpPv9nf7FUz0GGl6A8DQd2s/qFV/YJ4A/G/U8v+oCGXyFumTFFqgAe1x9lXFIkfIqd8Pgzg25QgcY8dzjWrxaUePfG4YW2AMnq/dHMSDyoIVQ8XUV63vFn8cAU+0Jm8COMl7BI6Rn7R/l6DUkZ4EY58/hOclx7wGQp8Qyd7DwKPEUR/2UHePOL9rjobO0UM+q+jXNoSlDVAiY79azJ04A55oVV6xqm7gHhCw2bUqibI8goDE9zh8ZCA0wBZgTkDJ7IgYItwJjkanQFQD1uw5E6JmnICSiiA+ih7lURDlxNQ7RgGcoLzX7fcGuJwAagNgKYLy/jxydOCrkeTrRqQG5OIjv7wp+E14jHEfAw2wFxI5opuXJ2JSFIsJoaoPg1g4yvyeyIp2yJXoQwZ1pNWlwlWVwP3OFB2mMqEKtTBbPEdlxoLeHIuHi2Lu1JhFRHnkDH47wJg793GJzaZDfKE4ZhPSVgYxh17ywpykyaTlUwPCJGrRzQOBPXcV3pXW6vNZkvO7uFeMoDy8RiPHieqTjrifQ91zAhwzK/ychax4/chbVG9uEm1nstBTvxlry9RaB/nqT27devgwyyJ64hMmHmRIV2hjfSSRZs9buSw8J1lLXBaJNU3km6uiYrHJxZuhiKQuAqR5c30jmIAYAqR5EdaoYAKLG/HVLrGIq3zCXo2tza7VJQBnHJZTAABpFAGKWdUKzxckCYNbEXEeTk/TgFIPySZgkMEUEvnHWTBAogZRXUDJ4Eap0JspWgPWamrAE8+HEa7/Ew+U5A/+NNcYBtBBQ6YAo+wVgqhxMKIuw+NXU41hgNxWVSeADOZ0PdFkEhAeC6gvFukIHUECYgwBjn7R237lCf78VGP4fGVl5XbYfYj2GFon4AE024UzjeEuud1KpHaPBwF/AAI6gJmZDv8kIfjXmRGXIXT4/x1GQGO1HxkBRU1qQuRnBJSu66yIZy1E1MrO5LzLs+AE3L17l2gAbcVO51RdSAa/Ivf7nPhiAyAh1BFi5N8x8WIEAS9auSwAA7+G/v/MGVB1rvU30lqYTg+kChA8RW47lzU05WQXvWkCaNNzDbgxXQvp9H3RCeAujICGppxGQIBiyygB0KLFv1RWsgwHiq3sCA1oZCgYhQZ0uP2b8WgAIyGVPJhcpJSAjk4ADpuAmgS8GEa4/vQuf1E0oHPqBoG7mde3trbuCNEdcrFupEunIfMLggFOQDO+QERdauOnBQGdmVNePU+3FhYW1sXFOrnYcqQjJOgaUDztY/GhTrzoW7X88lER0DmVevs5JUDI1hcuSzZ41cFY2AQ05AqMgADmypyirahYPYkdhYDUqQGUu/QG9Yg6koBmvKH2CSAlPrh/cHAfGvEiwNKAO+vr64UNUC9UDtIb9wnAFh49Al7g1n1HU3albtNF/0h3HEoyLQeJU0dSA15gVeTmzqpe6gl7CGCeYFOHCbRPwAzVANbObgK0eqaSA5lO6Ab8VxBA53xytsQR4/jtJKMh4P2CANYFWAW2Ll++XE7A9CUBhRKFC9kFkJj4Ixjm6fBJE+9GVO9dK5eF910ERGDnN2Ly6x1RZ8LawkVBoWoDsiVlouwIEMDbs5wHBwGk/gti6FA1AGFJQFa7B9gEPNkuASGkCgHcHBC74dAAWAJdaEDCFvodAQ0or32aKhqww3t/oQEqARnOFQ0Ai1h1U61PA34QRrj+9C5/rUjApTcJvpjn+IJcvAYqcOfixTvTJgFTS0srS+dF2qWVlaVBvYejiLrUxs+qEgDp549x7JOLN9Np1WyoBACWRdopNlc8WQRsCAIKmATMawQcSQ1grcub2E2AwkG5BjRlA0ZKwDR7OnIR8OrGxsYX7xC4CSDSjQkg4OLCwmU5yOsEAK5AjPQJNQLUZEeaADrGuTRAErBjEDAzgQSUasCOkp4Q0JksDbh8OdwFdhSc4i9GGiPgZQsRNdPS/+0nBv4Osb+NI2D6YprKKSKbgMXlxeXlmyo2Nr66e2WRxDdFwHctRBCgpf/9lAmIjSVAhU2ArJ2GK84koyTg5TIC5v4YJsD9RDghBExFEDDWGvDDMETSt35B8I/zCsB9m4LYf3755Zf/chJw8Q6Bc1bAQ8B5E26OGiOgAt6ySnzeai6bAPJ4f7mKBkSAEQD1qUzCIRGgKYCY9ByWAJgbrfxENHICUq4BjlfAwxOQRB+b0iQBiwSVCCDOj/EygPi4ly5demc4AmB6uPr0+PAEAF41S3Rvw0uAfNkpY7YIJb+DtPfqVF5gfqrWwpmWCDhmEuB6K8oBL8wYAcPUnxFQfdHAiAhIXSs/Cg1YWJg0AswukJa8EfAQoJoWBywx6wKVCfixia8jKv61SPw6xzdPm4C52isqAenW1rrnrRjMCr1mErC4RnBsg9zKTQCI54lUcl+TgHMaTpw491EEAR/zxCdOc7xuGf9lXiRpAy4W7zdsHUh3HATMzs4e83cM2BMDY86GRkD1LnDCxMcxBIjE8QRMpyUEEOn4EBClAUaeGALKNKA5Aqp3AZuAH4XxkZnp0SsqoNRXiA04r40C6wS++jsIOHaPYN6KBduyLMRPt6EBJ86FYeU5reINTRWkI1TiCTgJ2Bd30GIpuaAgQto8AUPDQ4DD9BWMOAjYcBKwP0EEBDSgFgEN2IDREZB6CLh27VqVLsBSWxqgM+E4Y6w9Ak68wfF6KQHpHVgwZBHw8+sUJ69fW+TQCJARQnoNEp88ef3622PTBTi4d+AngK4JtQk4yXHtWBSuifScgIpokYATUQSkTRNQVQNOW4hq3CAgmU1Aqu6QYASkh0zA9yxEEGBnsvCSogEzB/fv36ckwEJg6Q2qC4c9BMy/SiCqugwXwiIswsWyRUD1UeCsiePnwjqwqmU4bt2D4KXTQgP4Xjm6XH4L1sI7VwK7CbiijgLLcCGWBNBRYL4BAo6bWA0TcG5Vz3LWusnx44SA04IASgFdLu9dKluPgCY0oDoBp0EDHFU2CShGAbZlZiQEKGd0RJ6lZRb87OpLYay6qmwQ8OjRo2+EBsA+B7pnaH1ry71WOH1t/+bNm2RYX+Z+wPXrkgAx4tMno2V+Idm49kuG62/Pzc0tNaABxx2d2k4RxGPpCYq9v7Dd44b3iQje/V8Sbh5t4mOCAD+MZXIofLZEDAHNoKsRMMN2j/o3TtI5Q88CiWgCsjp7CZ2l9zd+XQL4vmk/AaAXwxIAJ0dVfjFSu4nLsdoThYQ1LR22/X1m5oaorrk3mL4vqUyAvlAyQRUPZmqLgPceP368Igt5l+DCGbF3DnDg3iB+cHDqmWe+/faDuf196fssLpdikY4N+/v7tweDgdhMbNt6O6AkbIMAq6UuFBufQzjzAUnvmQl3go4NAwy/qlBrrexICHjqDN/yV4p6BNDxcADaX73/j04D2CkQnYAKUGk9ArLaZ1h+30JEFe1MKv6trWeB8n1wIR7/Iek35uNxfmVpZZhTVazDuvJw/Vdz70lfdA+H9pa73I4PjyU4MGqIjeTyXCZ28l0SR4DnmB6UrEzNOSbxWiUAfllgiE1TyjZzdvZhvhpwdc8yAswD7thBpHT4Gy0B5IvzbJhdpHpWnL+3GsJ7Ofachop0AuChBY6As4vtOyzOVcXyO6zAqcBIOeQ+cQTY9J9LnhTn2/OTX7M8DKz9Em0xE411AugQfTvDGcTua7GZcpSgdlxhDmnlKACe4NyApAHbsqHFZgk7kBCHzgEOa4CuAgjOKsPyUFl5Uoc4DJc+cvju5SAA9rUu2QQYOisnaWnap42qsjvoBLCD0KsctOmFVGe6ETk3CMXmoarqeGsy4SBggJllMDWgeHJXz8dDmaUBU+Dj2gQgtn0+9tS8eBqYRROes+s82JLlmC4CSLSLAN+vGVAC7mkEEII0vWDvgBraPs+1XWNRfb0kf1co0QPiXHydf0aAXCdzmwBGqAH5XBGRGzYB8pR10qyD24Pbn+tpIRZuocZKApCW3woE5YwDeiiPrKFJUGlAbQZuBAVWcjipPKenXKOBZsN9GgB85thIy4/z1mKb0wCtpu5CJVh7muRnV9AAFueEszP6TQJwxo5pJqKeXinMf9rR+JEVaAuUmWTBt+DcIKChIzSK0ye5QeVHqyt2wNvnpQoWMRoBS9K4kfJbrWp2ARnKdQLoVDc2CZgqjkw19RYZ0SE5Lo4WctdSjvpJMfwnSoyKlSUFym5eMnqqkqWsRIHzZKCl5adkID22yVMlRU2Hv0UGC9YR4ie/FvWHXzrJ6W+BsVPfM3Wzu1kRmNkQvj37BbGEHxSrpkKxPyocAdqNFTXQbWU4t/RiEJb6gVAmPRUwDjijNUHAAD2iPRf9zrF2QT9MG4nxRncYGvsJB7WdHLfEwgg6AzUmIRq23cODFajyCe4NAroMdTBZICkCanQ78oIBCXsedcIRqCPm55Mg5gDIQP1jS8YTRRewJ9BH9NWHAlpRxeC7bIB0jdiV+KNHD0eA/Pk9hNQrO9C4XFbJC+UkRvZ7I+pgMBHAhkdrLDV0vVLCSgCrPxxUBMS1ER0tNwXtyQ0NkBMBTSl4HPShB5uBNuX8l7OKslR0BTSP0fO8HSWvma0B+YR05WExst+BsoHF4FscmG41Vavy8tI5YjQjGLxPUK4OU4FfqW1cLmsonOTK5T8UnWkUYVeYfSjPy8brtCMOrKi0L4n7qqnKFy8dlFmn4s0TblMuC4GQ7RdwDwkJk2E7FMkkdIEAtDdDdqARNXBOWroC7cgPvRsj4aP4Ai3KWQGUsrRZUS+UvoRLPblW5Ng0cZqlqFWhcpgkT7wVMWETgJQPLZAYRrgFeQTkq7HECDSnHvrAY4+z7cpNIrAj4yRD2AAknkk0xKjJkHaZfyp+hfQyeKB4PYKc8lD+MrmcEZKThFIg6l74P8h2hJp7fnTZbB5gL6GxVx7KXyZPDl/PNcbtAP1kL9m98lD+4P2HHYtKvihCjtRYQ3eZvuFef3e3j7zyUP4SuWIDhP7bdQspVcvAuLe3vb29101qLogO3Z5+KC8KdLFrPhzLaGqekGLblAAyAj65tDFWQIT727Ozs5u7Pnkof5lc9QSd7DoJ0AKtA3MC+ngkU3bFEuCIH7gdST/IVA1oHlolD2NECFoZXBCAXfJQ/oAc8xUdxbsyRxGRFlA/hm8UFATmBCjv95pCuHiueSXc6tOiBUnAqMYd+aSDlf+Mj2RkJrB9AkRHs6YGxgdd0QXaKKBQaXmpLNAaySgQugMsvfsEkNXdGRb6Aiugf30ALZTIKgLKUZ4nWThprduzeTKkTZeNE4jiZ+wNdlvF894XCQXw6AHf64DMV27FHy3gkbsVL+91ORKiAHDRg0YSkd0G7UHhXNTzND2ZQs9MSrRj2gR3965ykB7Q+4x87hEGejI2Z5MERjY9ECMPlPKwgLL+5ixHDyM2CvTJcLDGI9d6crPU8A0wZFkDXxuWK2+vmXMGMwC7BQFZsksJ6BImJAHdPCvcOTM/u7SXhdlypWTIu0BCnU9wue4tQNOAjDtCGgG9GsdouxFlS4r5OKwG2hoDcZ7tbq9x0C5APreBgE0Zi5raMoKMejgWAoam3ZsHad5en9v7HKxgt9/tgSPUE8ga+/7D939dhppPNZF+mfOHVbqRIqF7D8Az4ts7/Ya+1P5LeSIJ8PHgeysuY4avvxN0TxVYerB1hAzuC3GPBGHuHA0LXgDVoBlrKYauXwQDzAnlk/9sPT93T6nNzsj43+/3u0wivCroJwlf2GTl125UJqcVxoVbZlt29+OwYSSGrH8AxATsbW5ubndbd1bGzBviIFooHaFW7k//jmfdKYii9VslQHkWcCYYBTdlvpZGgMcXC/lqXvl/AYrS1rUqtXeoAAAAAElFTkSuQmCC"};var D=Q,p=a(10),m=a.n(p),C=function(A){var e=A.friends;return Object(d.jsx)("ul",{className:m.a.friendList,children:e.map((function(A){return Object(d.jsx)(D,{avatar:A.avatar,name:A.name,isOnline:A.isOnline},A.id)}))})},R=a(5),b=a.n(R),E=function(A){var e=A.items;return Object(d.jsxs)("table",{className:b.a.transactionHistory,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Type"}),Object(d.jsx)("th",{children:"Amount"}),Object(d.jsx)("th",{children:"Currency"})]})}),Object(d.jsx)("tbody",{children:e.map((function(A){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:b.a.item,children:A.type}),Object(d.jsx)("td",{className:b.a.item,children:A.amount}),Object(d.jsx)("td",{className:b.a.item,children:A.currency})]},A.id)}))})]})},y=a(3),x=a(8),G=a(11),h=a(12),k=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(l,{avatar:y.avatar,name:y.name,tag:y.tag,location:y.location,stats:y.stats}),Object(d.jsx)(u,{title:"Upload stats",stats:x}),Object(d.jsx)(u,{stats:x}),Object(d.jsx)(C,{friends:G}),Object(d.jsx)(E,{items:h})]})};a(18);i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.20a25752.chunk.js.map