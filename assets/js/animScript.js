////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

const anim = function(){

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    let arrImgLogo = [
        [
            "assets/img/TestProducts2/asgrow.png",
            "assets/img/TestProducts2/autumn.PNG",
            "assets/img/TestProducts2/axiom.PNG",
            "assets/img/TestProducts2/balance.PNG",
        ],
        [
            "assets/img/TestProducts2/baythroid.PNG",
            "assets/img/TestProducts2/corvus.png",
            "assets/img/TestProducts2/degree.PNG",
            "assets/img/TestProducts2/Huskie.png",
        ],
        [
            "assets/img/TestProducts2/asgrow.png",
            "assets/img/TestProducts2/axiom.PNG",
            "assets/img/TestProducts2/baythroid.PNG",
            "assets/img/TestProducts2/degree.PNG",
        ]
    ]
    let laptopImageUrl = "assets/img/TestProducts2/6_logos_v2.svg";
    let plusEndLogoUrl = "assets/img/TestProducts2/plus.png";

    if(document.querySelector(".gTriangleImage")) {
        for (let i = 0; i < 4; i++) {
            let tempArrIndex = getRandomInt(arrImgLogo.length)
            document.querySelector("#trianglesSvg .gTriangleImage > *:nth-child(" + (i + 1) + ") image").setAttribute("xlink:href", arrImgLogo[tempArrIndex][i])
        }
    }
    if(document.querySelector("#phoneLogo")){
        let logoImage = getRandomInt(arrImgLogo.length)
        document.querySelector("#phoneLogo image").setAttribute("xlink:href",arrImgLogo[logoImage][getRandomInt(arrImgLogo[logoImage].length)])
    }
    if(document.querySelector("#laptopImage")){
        let logoImage = getRandomInt(arrImgLogo.length)
        document.querySelector("#laptopImage image").setAttribute("xlink:href",laptopImageUrl)
    }
    if(document.querySelector("#plusEndLogo")){
        let logoImage = getRandomInt(arrImgLogo.length)
        document.querySelector("#plusEndLogo image").setAttribute("xlink:href",plusEndLogoUrl)
    }

    /**
     * anim for bg circle and line
     */
    document.querySelectorAll(".contForPoint").forEach(function (elem) {
        let tempAddHtml = ""
        let parentElem = ""

        elem.querySelectorAll(".contForPointA").forEach(function (child) {
            child.classList.add("pointBgTempPos")
            parentElem = child.parentNode
            console.log(parentElem)
            tempAddHtml += `
                <use xlink:href="#forUseA" class="dotAnim" x="${child.getAttribute("x")}" y="${child.getAttribute("y")}"  width="${child.getAttribute("width")}" height="${child.getAttribute("height")}" />
            `;
        })
        parentElem.innerHTML += tempAddHtml
        tempAddHtml = ""

        elem.querySelectorAll(".contForPointB").forEach(function (child) {
            child.classList.add("pointBgTempPos")
            parentElem = child.parentNode
            console.log(parentElem)
            tempAddHtml += `
                <use xlink:href="#forUseB" class="dotAnim" x="${child.getAttribute("x")}" y="${child.getAttribute("y")}"  width="${child.getAttribute("width")}" height="${child.getAttribute("height")}" />
            `;
        })
        parentElem.innerHTML += tempAddHtml

    })

    gsap.to(".dots > *",{duration:1,scale:1.5,delay:-10,transformOrigin:"50% 50%",ease:"sine.inOut", stagger:{each:0.1,repeat:-1,yoyo:true}})
    gsap.to(".lines > *",{duration:0.5,strokeDashoffset: 24,delay:-10,transformOrigin:"50% 50%",ease:"none", stagger:{each:0.1,repeat:-1}})

    gsap.to(".rectBgAnim > *:nth-child(1)",{duration:25,delay:-5,rotation:-360,transformOrigin:"50% 50%",ease:"none", stagger:{each:0.1,repeat:-1}})
    gsap.to(".rectBgAnim > *:nth-child(1)",{duration:22,delay:-5,scaleX:-1,transformOrigin:"50% 50%",ease:"none",repeat:-1,yoyo:true})

    gsap.to(".rectBgAnim > *:nth-child(2)",{duration:25,delay:-15,rotation:360,transformOrigin:"50% 50%",ease:"none", stagger:{each:0.1,repeat:-1}})
    gsap.to(".rectBgAnim > *:nth-child(2)",{duration:22,delay:-15,scaleX:-1,transformOrigin:"50% 50%",ease:"none",repeat:-1,yoyo:true})

    gsap.to(".rectBgAnim > *:nth-child(3)",{duration:22,delay:-20,rotation:-360,transformOrigin:"50% 50%",ease:"none", stagger:{each:0.1,repeat:-1}})
    gsap.to(".rectBgAnim > *:nth-child(3)",{duration:25,delay:-20,scaleX:-1,transformOrigin:"50% 50%",ease:"none",repeat:-1,yoyo:true})

    gsap.to(".rectBgAnim > *:nth-child(4)",{duration:22,rotation:360,transformOrigin:"50% 50%",ease:"none", stagger:{each:0.1,repeat:-1}})
    gsap.to(".rectBgAnim > *:nth-child(4)",{duration:25,scaleX:-1,transformOrigin:"50% 50%",ease:"none",repeat:-1,yoyo:true})






    // let pointArr = gsap.utils.toArray("#gPointScena2i1 > *:not(line),#gPointScena2i2 *:not(line)")
    // let pointArr = gsap.utils.toArray("#gPointScena2i1 > g .p,#gPointScena2i2 > g .p, #gPointScena2i3 > *, #gPointScena2i0 > *, #gTriangleImage > *")
    // let pointArrG = gsap.utils.toArray("#gPointScena2i1 > *,#gTriangleImage > *,#gPointScena2i2 > *, #gPointScena2i3, #gPointScena2i0")

    // let pointTlArr = []
    // pointArr.forEach(function (elem) {
    //     let tempPointTl = gsap.timeline({repeat:-1,yoyo:true,defaults:{ease:"none"}})
    //     for(let i = 0; i < 10; i++){
    //         let tempPP = {
    //             dur: gsap.utils.random(6,12,0.3),
    //             x: gsap.utils.random(-50,50,0.5),
    //             y: gsap.utils.random(-50,50,0.5),
    //         }
    //         tempPointTl.to(elem,{duration:tempPP.dur,x:"+="+tempPP.x,y:"+="+tempPP.y},"qq"+i)
    //         if(elem.getAttribute("id")){
    //             let tempParent = elem.parentNode
    //             let tempId = elem.classList[1]
    //             let tempClassS = "."+tempId+"S"
    //             let tempClassE = "."+tempId+"E"
    //             if(tempParent.querySelector(tempClassS))
    //                 tempPointTl.to(tempParent.querySelectorAll(tempClassS),{duration:tempPP.dur,attr:{x1:"+="+tempPP.x,y1:"+="+tempPP.y}},"qq"+i)
    //             if(tempParent.querySelector(tempClassE))
    //                 tempPointTl.to(tempParent.querySelectorAll(tempClassE),{duration:tempPP.dur,attr:{x2:"+="+tempPP.x,y2:"+="+tempPP.y}},"qq"+i)
    //         }
    //     }
    // })

    let moveElements = []
    document.querySelectorAll(".secAnim").forEach(function (elem,index,arr) {
        elem.style.zIndex = arr.length - index;
        moveElements.push(gsap.utils.toArray(".secAnim:nth-child("+(index+1)+") .contentScene .moveElements > * > g, .secAnim:nth-child("+(index+1)+") .bgScene .moveElements > * > g"))
    })
    document.querySelectorAll(".pointBg").forEach(function (elem,index,arr) {
        moveElements.push(gsap.utils.toArray(elem.querySelectorAll(".moveElements > *")))
    })


    for (let i = 0; i < moveElements.length; i++) {
        moveElements[i].forEach(function (elem) {
            let tempPointTl = gsap.timeline({repeat: -1, yoyo: true, defaults: {ease: "sine.inOut"}})
            for (let i = 0; i < 3; i++) {
                let tempPP = {
                    dur: gsap.utils.random(2, 3, 0.3),
                    x: gsap.utils.random([-10, 10]),
                    y: gsap.utils.random([-20, -15, -10, 10, 15, 20]),
                }
                tempPointTl.to(elem, {duration: tempPP.dur, x: "+=" + tempPP.x, y: "+=" + tempPP.y}, "qq" + i)
            }
        })
    }

    gsap.set(".secAnim",{autoAlpha:0})
    // gsap.set(".elLine", { strokeDasharray: 600, strokeDashoffset: 600})


    let stMainTl = gsap.timeline({id:"stMainTl",defaults:{ease:"sine.inOut"}})
    stMainTl.pause()




    function animationScene ( nameScene, typeAnimation, tweenDuration, scaleScene){
        let temBgColor = document.querySelector(`${nameScene} .bgColor`).getAttribute("fill")

        if(typeAnimation == 'scale-up-in'){
            return gsap.timeline({paused: true,defaults:{force3D:false}})
                .set(`${nameScene}`, { autoAlpha: 1 }, "<")
                .add("qq","<")
                .to(".main_animation_container",{duration: 1.2, background:temBgColor,ease:"sine.inOut"},"qq")
                .from(`${nameScene} .moveElements > *`,{duration: 1.2, scale:0.5,autoAlpha:0,transformOrigin:"50% 50%",ease:"sine.inOut",stagger:{each:0.2,from:"end"}},"qq")
                .from(`${nameScene} .lineBG > * > *`, { duration: 1, drawSVG: 0, ease: "power1.out", stagger: { each: 0.01, from: "end" } }, "qq+=0.2")
                .to(`${nameScene} .contentScene`, { duration: tweenDuration, scale: scaleScene,  transformOrigin: "50% 50%", ease: "none" }, 0)
                .from(`${nameScene} .elLine`, { duration: 1, drawSVG: 0, ease: "power4.out", stagger: { each: 0.02, from: "end" } }, "qq+=1")
                .from(`${nameScene} .elCircle`, { duration: 1, scale: 0, transformOrigin: "50% 50%", ease: "power4.out", stagger: { each: 0.05, from: "end" } }, "qq+=1.5")
                .duration(tweenDuration)
        }

        if (typeAnimation == 'scale-up-out') {
            return gsap.timeline({ paused: true,defaults:{force3D:false} })
                .to(`${nameScene} .moveElements > *`, { duration: 1, scale: 2, transformOrigin: "50% 50%", ease: "power1.in", stagger: { each: 0.2, from: "end" } })
                .to(`${nameScene} .lineBG > *`, { duration: 1, autoAlpha: 0, ease: "sine.inOut", stagger: { each: 0.1, from: "end" } }, "<")
                .to(`${nameScene} .moveElements > *`, { duration: 0.5, autoAlpha: 0, ease: "none", stagger: { each: 0.1, from: "end" } }, "<+0.5")
                .to(`${nameScene}`, { autoAlpha: 0 }, ">-0.5")
                .duration(tweenDuration)
        }

        if (typeAnimation == 'scale-down-in') {
            return gsap.timeline({ paused: true, defaults: { force3D: false } })
                .set(`${nameScene}`, { autoAlpha: 1 }, "<")
                .add("qq", "<")
                .to(".main_animation_container", { duration: 1.2, background: temBgColor, ease: "sine.inOut" }, "qq")
                .from(`${nameScene} .moveElements > *`, { duration: 1.2, scale: 2, autoAlpha: 0, transformOrigin: "50% 50%", ease: "sine.inOut", stagger: { each: 0.2, from: "end" } }, "qq")
                .from(`${nameScene} .lineBG > * > *`, { duration: 1, drawSVG: 0, ease: "power1.out", stagger: { each: 0.01, from: "end" } }, "qq+=0.2")
                .to(`${nameScene} .contentScene`, { duration: tweenDuration, scale: scaleScene, transformOrigin: "50% 50%", ease: "none" }, 0)
                .from(`${nameScene} .elLine`, { duration: 1, drawSVG: 0, ease: "power4.out", stagger: { each: 0.02, from: "end" } }, "qq+=1")
                .from(`${nameScene} .elCircle`, { duration: 1, scale: 0, transformOrigin: "50% 50%", ease: "power4.out", stagger: { each: 0.05, from: "end" } }, "qq+=1.5")
                .duration(tweenDuration)
         
        }

        if (typeAnimation == 'scale-down-out') {
            return gsap.timeline({ paused: true })
                .to(`${nameScene} .moveElements > *`, { duration: 1, scale: 0.5, transformOrigin: "50% 50%", ease: "power4.inOut", stagger: { each: 0.1, from: "end" } }, )
                .to(`${nameScene} .lineBG > *`, { duration: 1, autoAlpha: 0, ease: "power4.inOut", stagger: { each: 0.1, from: "end" } }, "<")
                .to(`${nameScene} .moveElements > *`, { duration: 0.5, autoAlpha: 0, ease: "none", stagger: { each: 0.1, from: "end" } }, "<+0.5")
                .set(`${nameScene}`, { autoAlpha: 0 }, ">")
                .duration(tweenDuration)
        }

        if (typeAnimation == 'translate-up-in') {
            return gsap.timeline({ paused: true })
                .set(`${nameScene}`, { autoAlpha: 1 }, "<")
                .add("qq", "<")
                .to(".main_animation_container", { duration: 1, background: temBgColor, ease: "sine.inOut" }, "qq")
                .from(`${nameScene} .moveElements > *`, { duration: 1, autoAlpha: 0, y: "100%", ease: "sine.out", stagger: { each: 0.05, from: "end" } }, "qq")
                .from(`${nameScene} .lineBG > * > *`, { duration: 1, drawSVG: 0, ease: "sine.inOut", stagger: { each: 0.2, from: "end" } }, "qq+=1")
                .from(`${nameScene} .elLine`, { duration: 1, drawSVG: 0, ease: "sine.out", stagger: { each: 0.02, from: "end" } }, "qq+=1.5")
                .from(`${nameScene} .elCircle`, { duration: 1, scale: 0, transformOrigin: "50% 50%", ease: "sine.out", stagger: { each: 0.05, from: "end" } }, "qq+=1")
                .duration(tweenDuration)
                .to(`${nameScene} .contentScene`, { duration: tweenDuration, scale: scaleScene, transformOrigin: "50% 50%", ease: "none" }, 0)
        }

        if (typeAnimation == 'translate-up-out') {
            return gsap.timeline({ paused: true })
                .to(`${nameScene} .moveElements > *`, { duration: 2, y: "-100%", transformOrigin: "50% 50%", ease: "power4.inOut", stagger: { each: 0.08, from: "end" } }, )
                .to(`${nameScene} .lineBG > *`, { duration: 1, autoAlpha: 0, ease: "power4.inOut", stagger: { each: 0.2, from: "end" } }, "<")
                // .to(`${nameScene} .moveElements > *`, { duration: 0.2, autoAlpha: 0, ease: "none", stagger: { each: 0.1, from: "end" } }, "<+4")
                .set(`${nameScene}`, { autoAlpha: 0 }, ">")
                .duration(tweenDuration)
        }

        if (typeAnimation == 'translate-down-in') {
            return gsap.timeline({ paused: true })
                .set(`${nameScene}`, { autoAlpha: 1 },"<")
                .add("qq","<")
                .to(".main_animation_container", { duration: 1, background: temBgColor, ease: "sine.inOut" }, "qq")
                .from(`${nameScene} .moveElements > *`, { duration: 1,  autoAlpha: 0, y: "-100%", ease: "sine.out", stagger: { each: 0.05, from: "end" } }, "qq")
                .from(`${nameScene} .lineBG > * > *`, { duration: 1, drawSVG: 0, ease: "sine.inOut", stagger: { each: 0.2, from: "end" } }, "qq+=1")
                .from(`${nameScene} .elLine`, { duration: 1, drawSVG: 0, ease: "sine.out", stagger: { each: 0.02, from: "end" } }, "qq+=1.5")
                .from(`${nameScene} .elCircle`, { duration: 1, scale: 0, transformOrigin: "50% 50%", ease: "sine.out", stagger: { each: 0.05, from: "end" } }, "qq+=1")
                .duration(tweenDuration)
                .to(`${nameScene} .contentScene`, { duration: tweenDuration, scale: scaleScene,  transformOrigin: "50% 50%", ease: "none" },0)

        }

        if (typeAnimation == 'translate-down-out') {
            return gsap.timeline({ paused: true })
                .to(`${nameScene} .moveElements > *`, { duration: 1, y: "100%", transformOrigin: "50% 50%", ease: "sine.in", stagger: { each: 0.1, from: "end" } }, )
                .to(`${nameScene} .lineBG > *`, { duration: 1, autoAlpha: 0, ease: "sine.inOut", stagger: { each: 0.1, from: "end" } }, "<")
                .set(`${nameScene}`, { autoAlpha: 0 }, ">")
                .duration(tweenDuration)
        }

        if (typeAnimation == 'translate-right-in') {
            return gsap.timeline({ paused: true })
                .set(`${nameScene}`, { autoAlpha: 1 }, "<")
                .add("qq", "<")
                .to(".main_animation_container", { duration: 1, background: temBgColor, ease: "sine.inOut" }, "qq")
                .from(`${nameScene} .moveElements > *`, { duration: 1, autoAlpha: 0, x: "-100%", ease: "sine.out", stagger: { each: 0.05, from: "end" } }, "qq")
                .from(`${nameScene} .lineBG > * > *`, { duration: 1, drawSVG: 0, ease: "sine.inOut", stagger: { each: 0.2, from: "end" } }, "qq+=1")
                .from(`${nameScene} .elLine`, { duration: 1, drawSVG: 0, ease: "sine.out", stagger: { each: 0.02, from: "end" } }, "qq+=1.5")
                .from(`${nameScene} .elCircle`, { duration: 1, scale: 0, transformOrigin: "50% 50%", ease: "sine.out", stagger: { each: 0.05, from: "end" } }, "qq+=1")
                .duration(tweenDuration)
                .to(`${nameScene} .contentScene`, { duration: tweenDuration, scale: scaleScene, transformOrigin: "50% 50%", ease: "none" }, 0)
          
        }

        if (typeAnimation == 'translate-right-out') {
            return gsap.timeline({ paused: true })
                .to(`${nameScene} .moveElements > *`, { duration: 2, x: "100%", transformOrigin: "50% 50%", ease: "power4.inOut", stagger: { each: 0.08, from: "end" } }, )
                .to(`${nameScene} .lineBG > *`, { duration: 1, autoAlpha: 0, ease: "power4.inOut", stagger: { each: 0.2, from: "end" } }, "<")
                .to(`${nameScene} .moveElements > *`, { duration: 0.2, autoAlpha: 0, ease: "none", stagger: { each: 0.1, from: "end" } }, "<+4")
                .set(`${nameScene}`, { autoAlpha: 0 }, ">")
                .duration(tweenDuration)
        }

        if (typeAnimation == 'translate-left-in') {
            return gsap.timeline({ paused: true })
                .set(`${nameScene}`, { autoAlpha: 1 }, "<")
                .add("qq", "<")
                .to(".main_animation_container", { duration: 1, background: temBgColor, ease: "sine.inOut" }, "qq")
                .from(`${nameScene} .moveElements > *`, { duration: 1, autoAlpha: 0, x: "100%", ease: "sine.out", stagger: { each: 0.05, from: "end" } }, "qq")
                .from(`${nameScene} .lineBG > * > *`, { duration: 1, drawSVG: 0, ease: "sine.inOut", stagger: { each: 0.2, from: "end" } }, "qq+=1")
                .from(`${nameScene} .elLine`, { duration: 1, drawSVG: 0, ease: "sine.out", stagger: { each: 0.02, from: "end" } }, "qq+=1.5")
                .from(`${nameScene} .elCircle`, { duration: 1, scale: 0, transformOrigin: "50% 50%", ease: "sine.out", stagger: { each: 0.05, from: "end" } }, "qq+=1")
                .duration(tweenDuration)
                .to(`${nameScene} .contentScene`, { duration: tweenDuration, scale: scaleScene, transformOrigin: "50% 50%", ease: "none" }, 0)
        

        }

        if (typeAnimation == 'translate-left-out') {
            return gsap.timeline({ paused: true })
                .to(`${nameScene} .contentScene .moveElements > *`, { duration: 2, x: "-100%", transformOrigin: "50% 50%", ease: "sine.inOut", stagger: { each: 0.08, from: "start" } },"<" )
                .to(`${nameScene} .bgScene .moveElements > *`, { duration: 2, x: "-100%", transformOrigin: "50% 50%", ease: "sine.inOut", stagger: { each: 0.08, from: "end" } },"<+0.3" )
                .to(`${nameScene} .lineBG > *`, { duration: 1, x: "-100%", ease: "sine.inOut", stagger: { each: 0.2, from: "end" } }, "<+0.5")
                .set(`${nameScene}`, { autoAlpha: 0 }, ">")
                .duration(tweenDuration)
        }

    }


    function varAnim1() {
        stMainTl
            .to(".pointBgScena1", {duration: 1, autoAlpha: 0.5})
            .from(".pointBgScena1 .contForPoint", {duration: 1.5, scale: 0.5, transformOrigin: "50% 50%"}, "<")
            .add(animationScene('.secAnim-greetings', 'scale-up-in',4, 1.15).restart(), "<")
            .add(animationScene('.secAnim-greetings', 'scale-up-out', 1, 1.15).restart(), '>')
            .to(".pointBgScena1 .contForPoint", {duration: 1, scale: 1.5, transformOrigin: "50% 30%",ease:"sine.inOut"}, "<")
            .to(".pointBgScena1 .contForPoint > *:nth-last-child(3)", {duration: 1, opacity: 0.4}, "<")

            .add(animationScene('.secAnim-thankYouFor', 'scale-up-in', 4, 1.15).restart(), "<")
            .add(animationScene('.secAnim-thankYouFor', 'translate-down-out', 1, 1.15).restart(), '>')
            .to(".pointBgScena1 .contForPoint", {duration: 1, y:"100%",ease:"sine.inOut"}, "<")
            .set(".pointBgScena1",{autoAlpha:0})

            .add(animationScene('.secAnim-brain', 'translate-down-in', 3.5, 1.15).restart(), ">-0.5")
            .add(animationScene('.secAnim-brain', 'translate-left-out', 1, 1.15).restart(), '>')

            .add(animationScene('.secAnim-triangles', 'translate-left-in', 5, 1.15).restart(),"<")
            .add(animationScene('.secAnim-triangles', 'scale-up-out', 0.5, 1.15).restart(), '>')
            
            .add(animationScene('.secAnim-andThoseChoices', 'scale-up-in', 4, 1.15).restart(), `<`)
            .add(animationScene('.secAnim-andThoseChoices', 'translate-up-out', 1, 1.15).restart(), '>')
            
            .add(animationScene('.secAnim-2455inRewards', 'translate-up-in', 3.5, 1.15).restart(), `<`)
            .add(animationScene('.secAnim-2455inRewards', 'translate-right-out', 1, 1.15).restart(), '>')
            
            .add(animationScene('.secAnim-745Balance', 'translate-right-in', 4, 1.15).restart(), `<`)
            .add(animationScene('.secAnim-745Balance', 'translate-down-out', 1, 1.15).restart(), '>')
            
            .add(animationScene('.secAnim-2022Season', 'translate-down-in', 4, 0.85).restart(), `<`)
            .add(animationScene('.secAnim-2022Season', 'scale-down-out', 1, 0.85).restart(), '>')
            
            .add(animationScene('.secAnim-asYouPlan', 'scale-down-in', 3.5, 0.85).restart(), `<`)
            .add(animationScene('.secAnim-asYouPlan', 'translate-left-out', 1, 0.85).restart(), '>')
            
            .add(animationScene('.secAnim-consider', 'translate-left-in', 4, 0.9).restart(), `<`)
            .add(animationScene('.secAnim-consider', 'scale-down-out', 1, 0.9).restart(), '>')
            
            .add(animationScene('.secAnim-laptop', 'scale-down-in', 4, 0.9).restart(), `<`)
            .add(animationScene('.secAnim-laptop', 'translate-left-out', 1, 0.9).restart(), '>')
            
            .add(animationScene('.secAnim-andThisYear', 'translate-left-in', 4, 1.15).restart(), `<`)
            .add(animationScene('.secAnim-andThisYear', 'translate-right-out', 1, 1.15).restart(), '>')
            
            .add(animationScene('.secAnim-barGraph', 'translate-right-in', 4, 1.10).restart(), `<`)
            .add(animationScene('.secAnim-barGraph', 'translate-up-out',1, 1.10).restart(), '>')
            
            .add(animationScene('.secAnim-justSendAll', 'translate-up-in', 4, 1.15).restart(), `<`)
            .add(animationScene('.secAnim-justSendAll', 'scale-up-out', 1, 1.15).restart(), '>')
            
            .add(animationScene('.secAnim-thankYouAnd', 'scale-up-in', 4, 1.15).restart(), `<`)
            .add(animationScene('.secAnim-thankYouAnd', 'scale-up-out',1, 1.15).restart(), '>')
            
            .add(animationScene('.secAnim-plus', 'scale-up-in', 4, 1.05).restart(), `<`)
            .add(animationScene('.secAnim-plus', 'scale-up-out', 1, 1.05).restart(), '>')
            
            .add(animationScene('.secAnim-endScene', 'scale-up-in', 6, 1.15).restart(), `<`)
            .add(animationScene('.secAnim-endScene', 'scale-up-out', 1, 1.15).restart(), '>')

        GSDevTools.create({paused: false, id: "stMainTl", animation: stMainTl
            // , inTime: 0
        })
        stMainTl.play()
        document.querySelector('.btn1').style.display = 'none'
        document.querySelector('.btn2').style.display = 'none'
    }
    varAnim1()

    // setTimeout(()=>{varAnim1()}, 2000)
    // document.querySelector('.btn1').addEventListener('click', varAnim1)
    //
    // document.querySelector('.btn2').addEventListener('click', () => {
    //     stMainTl
    //         .to(".pointBg",{autoAlpha:1})
    //         .add(animationScene('.secAnim-greetings', 'scale-up-in').restart())
    //         .add(animationScene('.secAnim-greetings', 'scale-up-out').restart(), '>-3')
    //
    //         .add(animationScene('.secAnim-thankYouFor', 'scale-up-in').restart(), `<+${animationScene('.secAnim-greetings', 'scale-up-in').duration() - 6.5}`)
    //         .add(animationScene('.secAnim-thankYouFor', 'translate-down-out').restart(), '>-3')
    //
    //         .add(animationScene('.secAnim-brain', 'translate-down-in').restart(), `<+${animationScene('.secAnim-thankYouFor', 'translate-down-out').duration() - 6.5}`)
    //         .add(animationScene('.secAnim-brain', 'translate-left-out').restart(), '>-3')
    //
    //         .add(animationScene('.secAnim-triangles', 'translate-left-in').restart(), `<+${animationScene('.secAnim-brain', 'translate-left-out').duration() - 6.5}`)
    //         .add(animationScene('.secAnim-triangles', 'scale-up-out').restart(), '>-3')
    //
    //         .add(animationScene('.secAnim-1250inRewards', 'scale-up-in').restart(), `<+${animationScene('.secAnim-triangles', 'scale-up-out').duration() - 4}`)
    //         .add(animationScene('.secAnim-1250inRewards', 'translate-up-out').restart(), '>-3')
    //
    //         .add(animationScene('.secAnim-2022Season2', 'translate-up-in').restart(), `<+${animationScene('.secAnim-1250inRewards', 'translate-up-out').duration() - 6.5}`)
    //         .add(animationScene('.secAnim-2022Season2', 'scale-down-out').restart(), '>-3')
    //
    //         .add(animationScene('.secAnim-asYouPlan', 'scale-down-in').restart(), `<+${animationScene('.secAnim-2022Season', 'scale-down-out').duration() - 4}`)
    //         .add(animationScene('.secAnim-asYouPlan', 'translate-left-out').restart(), '>-3')
    //
    //         .add(animationScene('.secAnim-consider', 'translate-left-in').restart(), `<+${animationScene('.secAnim-asYouPlan', 'translate-left-out').duration() - 6.5}`)
    //         .add(animationScene('.secAnim-consider', 'scale-down-out').restart(), '>-3')
    //
    //         .add(animationScene('.secAnim-laptop', 'scale-down-in').restart(), `<+${animationScene('.secAnim-consider', 'scale-down-out').duration() - 4}`)
    //         .add(animationScene('.secAnim-laptop', 'translate-left-out').restart(), '>-3')
    //
    //         .add(animationScene('.secAnim-andThisYear', 'translate-left-in').restart(), `<+${animationScene('.secAnim-laptop', 'translate-left-out').duration() - 6.5}`)
    //         .add(animationScene('.secAnim-andThisYear', 'translate-right-out').restart(), '>-3')
    //
    //         .add(animationScene('.secAnim-barGraph', 'translate-right-in').restart(), `<+${animationScene('.secAnim-andThisYear', 'translate-right-out').duration() - 6.5}`)
    //         .add(animationScene('.secAnim-barGraph', 'translate-up-out').restart(), '>-3')
    //
    //         .add(animationScene('.secAnim-justSpendSome', 'translate-up-in').restart(), `<+${animationScene('.secAnim-barGraph', 'translate-up-out').duration() - 6.5}`)
    //         .add(animationScene('.secAnim-justSpendSome', 'scale-up-out').restart(), '>-3')
    //
    //         .add(animationScene('.secAnim-thankYouAnd', 'scale-up-in').restart(), `<+${animationScene('.secAnim-justSpendSome', 'scale-up-out').duration() - 4}`)
    //         .add(animationScene('.secAnim-thankYouAnd', 'scale-up-out').restart(), '>-3')
    //     stMainTl.play()
    //     GSDevTools.create({ paused: true, id: "stMainTl", animation: stMainTl, inTime: 0 })
    //     document.querySelector('.btn1').style.display = 'none'
    //     document.querySelector('.btn2').style.display = 'none'
    // })

    gsap.set(".main_animation_container",{opacity:1})

}


///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

/**
 * load svg content
 */

let countContentSvg = [0]
let arrContentSvg = [
    ["assets/svg/greetings/greetingsBg copy.svg", '.main_animation_container .secAnim-greetings .imgBg', anim, countContentSvg],
    ["assets/svg/greetings/greetings copy.svg", '.main_animation_container .secAnim-greetings .imgCon', anim, countContentSvg],

    ["assets/svg/thankYouFor/thankYouForBg copy.svg", '.main_animation_container .secAnim-thankYouFor .imgBg', anim, countContentSvg],
    ["assets/svg/thankYouFor/thankYouFor copy.svg", '.main_animation_container .secAnim-thankYouFor .imgCon', anim, countContentSvg],

    ["assets/svg/brain/brainBg copy.svg", '.main_animation_container .secAnim-brain .imgBg', anim, countContentSvg],
    ["assets/svg/brain/brain copy.svg", '.main_animation_container .secAnim-brain .imgCon', anim, countContentSvg],

    ["assets/svg/triangles/triangles copy.svg", '.main_animation_container .secAnim-triangles .imgCon', anim, countContentSvg],

    ["assets/svg/andThoseChoices/andThoseChoicesBg copy.svg", '.main_animation_container .secAnim-andThoseChoices .imgBg', anim, countContentSvg],
    ["assets/svg/andThoseChoices/andThoseChoices copy.svg", '.main_animation_container .secAnim-andThoseChoices .imgCon', anim, countContentSvg],

    ["assets/svg/2455inRewards/2455inRewardsBg copy.svg", '.main_animation_container .secAnim-2455inRewards .imgBg', anim, countContentSvg],
    ["assets/svg/2455inRewards/2455inRewards copy.svg", '.main_animation_container .secAnim-2455inRewards .imgCon', anim, countContentSvg],

    ["assets/svg/745Balance/745BalanceBg copy.svg", '.main_animation_container .secAnim-745Balance .imgBg', anim, countContentSvg],
    ["assets/svg/745Balance/745Balance copy.svg", '.main_animation_container .secAnim-745Balance .imgCon', anim, countContentSvg],

    ["assets/svg/2022Season/2022SeasonBg copy.svg", '.main_animation_container .secAnim-2022Season .imgBg', anim, countContentSvg],
    ["assets/svg/2022Season/2022Season copy.svg", '.main_animation_container .secAnim-2022Season .imgCon', anim, countContentSvg],

    ["assets/svg/1250inRewards/1250inRewardsBg copy.svg", '.main_animation_container .secAnim-1250inRewards .imgBg', anim, countContentSvg],
    ["assets/svg/1250inRewards/1250inRewards copy.svg", '.main_animation_container .secAnim-1250inRewards .imgCon', anim, countContentSvg],

    ["assets/svg/2022Season2/2022Season2Bg copy.svg", '.main_animation_container .secAnim-2022Season2 .imgBg', anim, countContentSvg],
    ["assets/svg/2022Season2/2022Season2 copy.svg", '.main_animation_container .secAnim-2022Season2 .imgCon', anim, countContentSvg],

    ["assets/svg/asYouPlan/asYouPlanBg copy.svg", '.main_animation_container .secAnim-asYouPlan .imgBg', anim, countContentSvg],
    ["assets/svg/asYouPlan/asYouPlan copy.svg", '.main_animation_container .secAnim-asYouPlan .imgCon', anim, countContentSvg],

    ["assets/svg/consider/considerBg copy.svg", '.main_animation_container .secAnim-consider .imgBg', anim, countContentSvg],
    ["assets/svg/consider/consider copy.svg", '.main_animation_container .secAnim-consider .imgCon', anim, countContentSvg],

    ["assets/svg/laptop/laptopBg copy.svg", '.main_animation_container .secAnim-laptop .imgBg', anim, countContentSvg],
    ["assets/svg/laptop/laptop copy.svg", '.main_animation_container .secAnim-laptop .imgCon', anim, countContentSvg],

    ["assets/svg/andThisYear/andThisYear copy.svg", '.main_animation_container .secAnim-andThisYear .imgCon', anim, countContentSvg],

    ["assets/svg/barGraph/barGraphBg copy.svg", '.main_animation_container .secAnim-barGraph .imgBg', anim, countContentSvg],
    ["assets/svg/barGraph/barGraph copy.svg", '.main_animation_container .secAnim-barGraph .imgCon', anim, countContentSvg],

    ["assets/svg/justSpendSome/justSpendSomeBg copy.svg", '.main_animation_container .secAnim-justSpendSome .imgBg', anim, countContentSvg],
    ["assets/svg/justSpendSome/justSpendSome copy.svg", '.main_animation_container .secAnim-justSpendSome .imgCon', anim, countContentSvg],

    ["assets/svg/justSendAll/justSendAllBg copy.svg", '.main_animation_container .secAnim-justSendAll .imgBg', anim, countContentSvg],
    ["assets/svg/justSendAll/justSendAll copy.svg", '.main_animation_container .secAnim-justSendAll .imgCon', anim, countContentSvg],

    ["assets/svg/thankYouAnd/thankYouAndBg copy.svg", '.main_animation_container .secAnim-thankYouAnd .imgBg', anim, countContentSvg],
    ["assets/svg/thankYouAnd/thankYouAnd copy.svg", '.main_animation_container .secAnim-thankYouAnd .imgCon', anim, countContentSvg],

    ["assets/svg/plus/plus copy.svg", '.main_animation_container .secAnim-plus .imgCon', anim, countContentSvg],

    ["assets/svg/endScene/endScene copy.svg", '.main_animation_container .secAnim-endScene .imgCon', anim, countContentSvg],

//
    ["assets/svg/dotForBgAnim/Dots_N_Lines copy.svg", '.pointBgPre', anim, countContentSvg],
    ["assets/svg/dotForBgAnim/DotsRectScena1 copy.svg", '.pointBgScena1', anim, countContentSvg],

]

async function getFile(pathToSVGfile, insertEl, anim, counter) {
    const res = await fetch(`${pathToSVGfile}`)
    res.text().then(res => {
        document.querySelector(insertEl).innerHTML = res
        let idSvg = document.querySelector(insertEl+ " svg").getAttribute("id")
        document.querySelector(insertEl).innerHTML = res.replaceAll("SVGID", idSvg + "_SVGID")
            .replace('<?xml version="1.0" encoding="utf-8"?>',"")
            .replace('<!-- Generator: Adobe Illustrator 24.1.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->',"");
    }).then(() => {
        let idSvg = document.querySelector(insertEl+ " svg").getAttribute("id")
        // document.querySelector("head title").innerHTML = idSvg
        //// set class
        document.querySelectorAll(`${insertEl} svg *`).forEach((elem) => {
            if (elem.getAttribute('id')) {
                let tempId = elem.getAttribute('id');

                if ((tempId[0] == '_' && tempId[1] == 'x' && tempId[2] == '2') || (tempId[0] == '_' && tempId[1] == '-')) {
                    if(tempId[0] == '_' && tempId[1] == '-')tempId = tempId.slice(3)
                    else tempId = tempId.slice(6)

                    let tempClassList = '';
                    do {
                        if (tempId[0] == '.') {
                            tempClassList += ' '
                            tempId = tempId.slice(1)
                        }
                        if (tempId[0] == '-') {
                            break;
                        }

                        tempClassList += tempId.slice(0, 1)
                        tempId = tempId.slice(1)

                    } while (tempId.length > 0)
                    elem.setAttribute('class', tempClassList)
                }
            }
        })

        // if ()
        if(idSvg[idSvg.length-5] == "B" && idSvg[idSvg.length-4] == "g")
            document.querySelector(insertEl +" svg").setAttribute("preserveAspectRatio","none")
        // document.querySelector(insertEl +" svg").setAttribute("preserveAspectRatio","xMidYMid slice")
        // console.log(document.querySelector(insertEl).innerHTML)
        counter[0]++
        if(counter[0] == arrContentSvg.length ){anim()}

    })

}

function loadContent(){
    arrContentSvg.forEach(function (elem) {
        getFile(elem[0], elem[1], elem[2], elem[3])
    })
}
loadContent()

