async function getFile(pathToSVGfile, insertEl, anim) {
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
        if(anim) anim()

    })

}
const anim = () => {

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

    /**
     * anim for bg circle and line
     */
    document.querySelectorAll(".contForPoint").forEach(function (elem) {

        elem.querySelectorAll(".contForPointA").forEach(function (child) {
            child.style.display = "none"
            elem.innerHTML += `
                <use xlink:href="#forUseA" class="dotAnim" x="${child.getAttribute("x")}" y="${child.getAttribute("y")}"  width="${child.getAttribute("width")}" height="${child.getAttribute("height")}" />
            `;
        })

        elem.querySelectorAll(".contForPointB").forEach(function (child) {
            child.style.display = "none"
            elem.innerHTML += `
                <use xlink:href="#forUseA" class="dotAnim" x="${child.getAttribute("x")}" y="${child.getAttribute("y")}"  width="${child.getAttribute("width")}" height="${child.getAttribute("height")}" />
            `;
        })

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
        // console.log(index, elem);
        moveElements.push(gsap.utils.toArray(".secAnim:nth-child("+(index+1)+") .contentScene .moveElements > * > g, .secAnim:nth-child("+(index+1)+") .bgScene .moveElements > * > g"))
    })

    // console.log(moveElements)

    // let pointTlArr = []
    // for (let arr in moveElements) {
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




    function animationScene ( nameScene, typeAnimation){
        if(typeAnimation == 'scale-up-in'){
            let temBgColor = document.querySelector(`${nameScene} .bgColor`).getAttribute("fill")
            return gsap.timeline({paused: true})
                .set(`${nameScene}`, { autoAlpha: 1 }, (nameScene == '.secAnim-greetings') ? ">" : "<")
                .to(".main_animation_container",{duration: 1.2, background:temBgColor,ease:"sine.inOut"},"<")
                .from(`${nameScene} .lineBG > *`, { duration: 1.2, autoAlpha: 0, ease: "power4.out", stagger: { each: 0.01, from: "end" } }, "<")
                .from(`${nameScene} .moveElements > *`,{duration: 1.2, scale:0.5,autoAlpha:0,transformOrigin:"50% 50%",ease:"power4.inOut",force3D:false,stagger:{each:0.1,from:"end"}},"<")
                .from(`${nameScene} .contentScene`, { duration: 6, scale: 0.8,  transformOrigin: "50% 50%", ease: "power4.out" }, "<+1")
                .from(`${nameScene} .elLine`, { duration: 1, drawSVG: 0, ease: "power4.out", stagger: { each: 0.02, from: "end" } }, "<+1")
                .from(`${nameScene} .elCircle`, { duration: 1, scale: 0, transformOrigin: "50% 50%", ease: "power4.out", stagger: { each: 0.05, from: "end" } }, "<+0.5")

        }
        if (typeAnimation == 'scale-up-out') {
            return gsap.timeline({ paused: true })
                .to(`${nameScene} .moveElements > *`, { duration: 1, scale: 2, transformOrigin: "50% 50%", ease: "power4.inOut",force3D:false, stagger: { each: 0.1, from: "end" } }, )
                .to(`${nameScene} .lineBG > *`, { duration: 1, autoAlpha: 0, ease: "power4.inOut", stagger: { each: 0.1, from: "end" } }, "<")
                .to(`${nameScene} .moveElements > *`, { duration: 0.5, autoAlpha: 0, ease: "none", stagger: { each: 0.1, from: "end" } }, "<+0.5")
                .set(`${nameScene}`, { autoAlpha: 0 }, ">")
        }
        if (typeAnimation == 'scale-down-in') {
            let temBgColor = document.querySelector(`${nameScene} .bgColor`).getAttribute("fill")
            return gsap.timeline({ paused: true })
                .set(`${nameScene}`, { autoAlpha: 1 }, (nameScene == '.secAnim-greetings') ? ">" : "<")
                .to(".main_animation_container", { duration: 1.2, background: temBgColor, ease: "sine.inOut" }, "<")
                .from(`${nameScene} .lineBG > *`, { duration: 1.2, autoAlpha: 0, ease: "power4.inOut", stagger: { each: 0.1, from: "end" } }, "<")
                .from(`${nameScene} .moveElements > *`, { duration: 1.2, scale: 2, autoAlpha: 0, transformOrigin: "50% 50%", ease: "power4.inOut", force3D:false, stagger: { each: 0.1, from: "end" } }, "<")
                .from(`${nameScene} .contentScene`, { duration: 6, scale: 1.3, transformOrigin: "50% 50%", ease: "power4.out" }, "<+1")
                .from(`${nameScene} .elLine`, { duration: 1, drawSVG: 0, ease: "power4.out", stagger: { each: 0.02, from: "end" } }, "<+1")
                .from(`${nameScene} .elCircle`, { duration: 1, scale: 0, transformOrigin: "50% 50%", ease: "power4.out", stagger: { each: 0.05, from: "end" } }, "<+0.5")
        }
        if (typeAnimation == 'scale-down-out') {
            return gsap.timeline({ paused: true })
                .to(`${nameScene} .moveElements > *`, { duration: 1, scale: 0.5, transformOrigin: "50% 50%", ease: "power4.inOut", stagger: { each: 0.1, from: "end" } }, )
                .to(`${nameScene} .lineBG > *`, { duration: 1, autoAlpha: 0, ease: "power4.inOut", stagger: { each: 0.1, from: "end" } }, "<")
                .to(`${nameScene} .moveElements > *`, { duration: 0.5, autoAlpha: 0, ease: "none", stagger: { each: 0.1, from: "end" } }, "<+0.5")
                .set(`${nameScene}`, { autoAlpha: 0 }, ">")
        }
        if (typeAnimation == 'translate-up-in') {
            let temBgColor = document.querySelector(`${nameScene} .bgColor`).getAttribute("fill")
            return gsap.timeline({ paused: true })
                .set(`${nameScene}`, { autoAlpha: 1 }, (nameScene == '.secAnim-greetings') ? ">" : "<")
                .to(".main_animation_container", { duration: 1, background: temBgColor, ease: "sine.inOut" }, "<")
                .from(`${nameScene} .lineBG > *`, { duration: 1, autoAlpha: 0, ease: "power4.inOut", stagger: { each: 0.2, from: "end" } }, "<")
                .from(`${nameScene} .moveElements > *`, { duration: 2, autoAlpha: 0, y: 2500, ease: "power4.inOut", stagger: { each: 0.08, from: "end" } }, "<")
                .from(`${nameScene} .contentScene`, { duration: 6, y: 300, ease: "power4.out" }, "<+1")
                .from(`${nameScene} .elLine`, { duration: 1, drawSVG: 0, ease: "power4.out", stagger: { each: 0.02, from: "end" } }, "<+1")
                .from(`${nameScene} .elCircle`, { duration: 1, scale: 0, transformOrigin: "50% 50%", ease: "power4.out", stagger: { each: 0.05, from: "end" } }, "<+0.5")
        }
        if (typeAnimation == 'translate-up-out') {
            return gsap.timeline({ paused: true })
                .to(`${nameScene} .moveElements > *`, { duration: 2, y: -2500, transformOrigin: "50% 50%", ease: "power4.inOut", stagger: { each: 0.08, from: "end" } }, )
                .to(`${nameScene} .lineBG > *`, { duration: 1, autoAlpha: 0, ease: "power4.inOut", stagger: { each: 0.2, from: "end" } }, "<")
                .to(`${nameScene} .moveElements > *`, { duration: 0.2, autoAlpha: 0, ease: "none", stagger: { each: 0.1, from: "end" } }, "<+4")
                .set(`${nameScene}`, { autoAlpha: 0 }, ">")
        }
        if (typeAnimation == 'translate-down-in') {
            let temBgColor = document.querySelector(`${nameScene} .bgColor`).getAttribute("fill")
            return gsap.timeline({ paused: true })
                .set(`${nameScene}`, { autoAlpha: 1 }, (nameScene == '.secAnim-greetings') ? ">" : "<")
                .to(".main_animation_container", { duration: 1, background: temBgColor, ease: "sine.inOut" }, "<")
                .from(`${nameScene} .lineBG > *`, { duration: 1, autoAlpha: 0, ease: "power4.inOut", stagger: { each: 0.2, from: "end" } }, "<")
                .from(`${nameScene} .moveElements > *`, { duration: 2,  autoAlpha: 0, y: -2500, ease: "power4.inOut", stagger: { each: 0.08, from: "end" } }, "<")
                .from(`${nameScene} .contentScene`, { duration: 6, y: -300, ease: "power4.out" }, "<+1")
                .from(`${nameScene} .elLine`, { duration: 1, drawSVG: 0, ease: "power4.out", stagger: { each: 0.02, from: "end" } }, "<+1")
                .from(`${nameScene} .elCircle`, { duration: 1, scale: 0, transformOrigin: "50% 50%", ease: "power4.out", stagger: { each: 0.05, from: "end" } }, "<+0.5")
        }
        if (typeAnimation == 'translate-down-out') {
            return gsap.timeline({ paused: true })
                .to(`${nameScene} .moveElements > *`, { duration: 2, y: 2500, transformOrigin: "50% 50%", ease: "power4.inOut", stagger: { each: 0.08, from: "end" } }, )
                .to(`${nameScene} .lineBG > *`, { duration: 1, autoAlpha: 0, ease: "power4.inOut", stagger: { each: 0.2, from: "end" } }, "<")
                .to(`${nameScene} .moveElements > *`, { duration: 0.2, autoAlpha: 0, ease: "none", stagger: { each: 0.1, from: "end" } }, "<+4")
                .set(`${nameScene}`, { autoAlpha: 0 }, ">")
        }
        if (typeAnimation == 'translate-right-in') {
            let temBgColor = document.querySelector(`${nameScene} .bgColor`).getAttribute("fill")
            return gsap.timeline({ paused: true })
                .set(`${nameScene}`, { autoAlpha: 1 }, (nameScene == '.secAnim-greetings') ? ">" : "<")
                .to(".main_animation_container", { duration: 1, background: temBgColor, ease: "sine.inOut" }, "<")
                .from(`${nameScene} .lineBG > *`, { duration: 1, autoAlpha: 0, ease: "power4.inOut", stagger: { each: 0.2, from: "end" } }, "<")
                .from(`${nameScene} .moveElements > *`, { duration: 2, autoAlpha: 0, x: -4000, ease: "power4.inOut", stagger: { each: 0.08, from: "end" } }, "<")
                .from(`${nameScene} .contentScene`, { duration: 6, x: -300, ease: "power4.out" }, "<+1")
                .from(`${nameScene} .elLine`, { duration: 1, drawSVG: 0, ease: "power4.out", stagger: { each: 0.02, from: "end" } }, "<+1")
                .from(`${nameScene} .elCircle`, { duration: 1, scale: 0, transformOrigin: "50% 50%", ease: "power4.out", stagger: { each: 0.05, from: "end" } }, "<+0.5")
        }
        if (typeAnimation == 'translate-right-out') {
            return gsap.timeline({ paused: true })
                .to(`${nameScene} .moveElements > *`, { duration: 2, x: 4000, transformOrigin: "50% 50%", ease: "power4.inOut", stagger: { each: 0.08, from: "end" } }, )
                .to(`${nameScene} .lineBG > *`, { duration: 1, autoAlpha: 0, ease: "power4.inOut", stagger: { each: 0.2, from: "end" } }, "<")
                .to(`${nameScene} .moveElements > *`, { duration: 0.2, autoAlpha: 0, ease: "none", stagger: { each: 0.1, from: "end" } }, "<+4")
                .set(`${nameScene}`, { autoAlpha: 0 }, ">")
        }
        if (typeAnimation == 'translate-left-in') {
            let temBgColor = document.querySelector(`${nameScene} .bgColor`).getAttribute("fill")
            return gsap.timeline({ paused: true })
                .set(`${nameScene}`, { autoAlpha: 1 }, (nameScene == '.secAnim-greetings') ? ">" : "<")
                .to(".main_animation_container", { duration: 1, background: temBgColor, ease: "sine.inOut" }, "<")
                .from(`${nameScene} .lineBG > *`, { duration: 1, autoAlpha: 0, ease: "power4.inOut", stagger: { each: 0.2, from: "end" } }, "<")
                .from(`${nameScene} .moveElements > *`, { duration: 2, autoAlpha: 0, x: 4000, ease: "power4.inOut", stagger: { each: 0.08, from: "end" } }, "<")
                .from(`${nameScene} .contentScene`, { duration: 6, x: 300, ease: "power4.out" }, "<+1")
                .from(`${nameScene} .elLine`, { duration: 1, drawSVG: 0, ease: "power4.out", stagger: { each: 0.02, from: "end" } }, "<+1")
                .from(`${nameScene} .elCircle`, { duration: 1, scale: 0, transformOrigin: "50% 50%", ease: "power4.out", stagger: { each: 0.05, from: "end" } }, "<+0.5")
        }
        if (typeAnimation == 'translate-left-out') {
            return gsap.timeline({ paused: true })
                .to(`${nameScene} .moveElements > *`, { duration: 2, x: -4000, transformOrigin: "50% 50%", ease: "power4.inOut", stagger: { each: 0.08, from: "end" } }, )
                .to(`${nameScene} .lineBG > *`, { duration: 1, autoAlpha: 0, ease: "power4.inOut", stagger: { each: 0.2, from: "end" } }, "<")
                .to(`${nameScene} .moveElements > *`, { duration: 0.2, autoAlpha: 0, ease: "none", stagger: { each: 0.1, from: "end" } }, "<+4")
                .set(`${nameScene}`, { autoAlpha: 0 }, ">")
        }
    }


    document.querySelector('.btn1').addEventListener('click', () => {
        stMainTl
            .add(animationScene('.secAnim-greetings', 'scale-up-in').restart())
            .add(animationScene('.secAnim-greetings', 'scale-up-out').restart(), '>-3')

            .add(animationScene('.secAnim-thankYouFor', 'scale-up-in').restart(), `<+${animationScene('.secAnim-greetings', 'scale-up-in').duration() - 6.5 }`)
            .add(animationScene('.secAnim-thankYouFor', 'translate-down-out').restart(), '>-3')

            .add(animationScene('.secAnim-brain', 'translate-down-in').restart(), `<+${animationScene('.secAnim-thankYouFor', 'translate-down-out').duration() - 6.5}`)
            .add(animationScene('.secAnim-brain', 'translate-left-out').restart(), '>-3')

            .add(animationScene('.secAnim-triangles', 'translate-left-in').restart(), `<+${animationScene('.secAnim-brain', 'translate-left-out').duration() - 6.5}`)
            .add(animationScene('.secAnim-triangles', 'scale-up-out').restart(), '>-2')

            .add(animationScene('.secAnim-andThoseChoices', 'scale-up-in').restart(), `<+${animationScene('.secAnim-triangles', 'scale-up-out').duration() - 4}`)
            .add(animationScene('.secAnim-andThoseChoices', 'translate-up-out').restart(), '>-3')

            .add(animationScene('.secAnim-2455inRewards', 'translate-up-in').restart(), `<+${animationScene('.secAnim-andThoseChoices', 'translate-up-out').duration() - 6.5}`)
            .add(animationScene('.secAnim-2455inRewards', 'translate-right-out').restart(), '>-3')

            .add(animationScene('.secAnim-745Balance', 'translate-right-in').restart(), `<+${animationScene('.secAnim-2455inRewards', 'translate-right-out').duration() - 6.5}`)
            .add(animationScene('.secAnim-745Balance', 'translate-down-out').restart(), '>-3')

            .add(animationScene('.secAnim-2022Season', 'translate-down-in').restart(), `<+${animationScene('.secAnim-745Balance', 'translate-down-out').duration() - 6.5}`)
            .add(animationScene('.secAnim-2022Season', 'scale-down-out').restart(), '>-3')

            .add(animationScene('.secAnim-asYouPlan', 'scale-down-in').restart(), `<+${animationScene('.secAnim-2022Season', 'scale-down-out').duration() - 4}`)
            .add(animationScene('.secAnim-asYouPlan', 'translate-left-out').restart(), '>-3')

            .add(animationScene('.secAnim-consider', 'translate-left-in').restart(), `<+${animationScene('.secAnim-asYouPlan', 'translate-left-out').duration() - 6.5}`)
            .add(animationScene('.secAnim-consider', 'scale-down-out').restart(), '>-3')

            .add(animationScene('.secAnim-laptop', 'scale-down-in').restart(), `<+${animationScene('.secAnim-consider', 'scale-down-out').duration() - 4}`)
            .add(animationScene('.secAnim-laptop', 'translate-left-out').restart(), '>-3')

            .add(animationScene('.secAnim-andThisYear', 'translate-left-in').restart(), `<+${animationScene('.secAnim-laptop', 'translate-left-out').duration() - 6.5}`)
            .add(animationScene('.secAnim-andThisYear', 'translate-right-out').restart(), '>-3')

            .add(animationScene('.secAnim-barGraph', 'translate-right-in').restart(), `<+${animationScene('.secAnim-andThisYear', 'translate-right-out').duration() - 6.5}`)
            .add(animationScene('.secAnim-barGraph', 'translate-up-out').restart(), '>-3')

            .add(animationScene('.secAnim-justSendAll', 'translate-up-in').restart(), `<+${animationScene('.secAnim-barGraph', 'translate-up-out').duration() - 6.5}`)
            .add(animationScene('.secAnim-justSendAll', 'scale-up-out').restart(), '>-3')

            .add(animationScene('.secAnim-thankYouAnd', 'scale-up-in').restart(), `<+${animationScene('.secAnim-justSpendSome', 'scale-up-out').duration() - 4}`)
            .add(animationScene('.secAnim-thankYouAnd', 'scale-up-out').restart(), '>-3')

            .add(animationScene('.secAnim-plus', 'scale-up-in').restart(), `<+${animationScene('.secAnim-justSpendSome', 'scale-up-out').duration() - 4}`)
            .add(animationScene('.secAnim-plus', 'scale-up-out').restart(), '>-3')

            .add(animationScene('.secAnim-endScene', 'scale-up-in').restart(), `<+${animationScene('.secAnim-justSpendSome', 'scale-up-out').duration() - 4}`)
            .add(animationScene('.secAnim-endScene', 'scale-up-out').restart(), '>-3')

        GSDevTools.create({ paused: true, id: "stMainTl", animation: stMainTl, inTime: 0 })
        stMainTl.play()
        document.querySelector('.btn1').style.display = 'none'
        document.querySelector('.btn2').style.display = 'none'
    })

    document.querySelector('.btn2').addEventListener('click', () => {
        stMainTl
            .add(animationScene('.secAnim-greetings', 'scale-up-in').restart())
            .add(animationScene('.secAnim-greetings', 'scale-up-out').restart(), '>-3')

            .add(animationScene('.secAnim-thankYouFor', 'scale-up-in').restart(), `<+${animationScene('.secAnim-greetings', 'scale-up-in').duration() - 6.5}`)
            .add(animationScene('.secAnim-thankYouFor', 'translate-down-out').restart(), '>-3')

            .add(animationScene('.secAnim-brain', 'translate-down-in').restart(), `<+${animationScene('.secAnim-thankYouFor', 'translate-down-out').duration() - 6.5}`)
            .add(animationScene('.secAnim-brain', 'translate-left-out').restart(), '>-3')

            .add(animationScene('.secAnim-triangles', 'translate-left-in').restart(), `<+${animationScene('.secAnim-brain', 'translate-left-out').duration() - 6.5}`)
            .add(animationScene('.secAnim-triangles', 'scale-up-out').restart(), '>-3')

            .add(animationScene('.secAnim-1250inRewards', 'scale-up-in').restart(), `<+${animationScene('.secAnim-triangles', 'scale-up-out').duration() - 4}`)
            .add(animationScene('.secAnim-1250inRewards', 'translate-up-out').restart(), '>-3')

            .add(animationScene('.secAnim-2022Season2', 'translate-up-in').restart(), `<+${animationScene('.secAnim-1250inRewards', 'translate-up-out').duration() - 6.5}`)
            .add(animationScene('.secAnim-2022Season2', 'scale-down-out').restart(), '>-3')

            .add(animationScene('.secAnim-asYouPlan', 'scale-down-in').restart(), `<+${animationScene('.secAnim-2022Season', 'scale-down-out').duration() - 4}`)
            .add(animationScene('.secAnim-asYouPlan', 'translate-left-out').restart(), '>-3')

            .add(animationScene('.secAnim-consider', 'translate-left-in').restart(), `<+${animationScene('.secAnim-asYouPlan', 'translate-left-out').duration() - 6.5}`)
            .add(animationScene('.secAnim-consider', 'scale-down-out').restart(), '>-3')

            .add(animationScene('.secAnim-laptop', 'scale-down-in').restart(), `<+${animationScene('.secAnim-consider', 'scale-down-out').duration() - 4}`)
            .add(animationScene('.secAnim-laptop', 'translate-left-out').restart(), '>-3')

            .add(animationScene('.secAnim-andThisYear', 'translate-left-in').restart(), `<+${animationScene('.secAnim-laptop', 'translate-left-out').duration() - 6.5}`)
            .add(animationScene('.secAnim-andThisYear', 'translate-right-out').restart(), '>-3')

            .add(animationScene('.secAnim-barGraph', 'translate-right-in').restart(), `<+${animationScene('.secAnim-andThisYear', 'translate-right-out').duration() - 6.5}`)
            .add(animationScene('.secAnim-barGraph', 'translate-up-out').restart(), '>-3')

            .add(animationScene('.secAnim-justSpendSome', 'translate-up-in').restart(), `<+${animationScene('.secAnim-barGraph', 'translate-up-out').duration() - 6.5}`)
            .add(animationScene('.secAnim-justSpendSome', 'scale-up-out').restart(), '>-3')

            .add(animationScene('.secAnim-thankYouAnd', 'scale-up-in').restart(), `<+${animationScene('.secAnim-justSpendSome', 'scale-up-out').duration() - 4}`)
            .add(animationScene('.secAnim-thankYouAnd', 'scale-up-out').restart(), '>-3')
        stMainTl.play()
        GSDevTools.create({ paused: true, id: "stMainTl", animation: stMainTl, inTime: 0 })
        document.querySelector('.btn1').style.display = 'none'
        document.querySelector('.btn2').style.display = 'none'
    })
        // stMainTl
        //     .add(animationScene('.secAnim-greetings', 'scale-up').restart())
        //     .add(animationScene('.secAnim-thankYouFor', 'scale-up').restart())
        //     .add(animationScene('.secAnim-brain', 'translate-down').restart())
        //     .add(animationScene('.secAnim-triangles', 'translate-left').restart())
        //     .add(animationScene('.secAnim-andThoseChoices', 'scale-up').restart())
        //     .add(animationScene('.secAnim-2455inRewards', 'translate-up').restart())
        //     .add(animationScene('.secAnim-745Balance', 'translate-right').restart())
        //     .add(animationScene('.secAnim-2022Season', 'translate-down').restart())
        //     .add(animationScene('.secAnim-asYouPlan', 'scale-down').restart())
        //     .add(animationScene('.secAnim-consider', 'translate-left').restart())
        //     .add(animationScene('.secAnim-laptop', 'scale-down').restart())
        //     .add(animationScene('.secAnim-andThisYear', 'translate-left').restart())
        //     .add(animationScene('.secAnim-barGraph', 'translate-right').restart())
        //     .add(animationScene('.secAnim-justSpendSome', 'translate-up').restart())
        //     .add(animationScene('.secAnim-thankYouAnd', 'scale-up').restart())

        // stMainTl2
        //     .add(animationScene('.secAnim-greetings', 'scale-up').restart())
        //     .add(animationScene('.secAnim-thankYouFor', 'scale-up').restart())
        //     .add(animationScene('.secAnim-brain', 'translate-down').restart())
        //     .add(animationScene('.secAnim-triangles', 'translate-left').restart())
        //     .add(animationScene('.secAnim-1250inRewards', 'scale-up').restart())
        //     .add(animationScene('.secAnim-2022Season2', 'translate-up').restart())
        //     .add(animationScene('.secAnim-asYouPlan', 'scale-down').restart())
        //     .add(animationScene('.secAnim-consider', 'translate-left').restart())
        //     .add(animationScene('.secAnim-laptop', 'scale-down').restart())
        //     .add(animationScene('.secAnim-andThisYear', 'translate-left').restart())
        //     .add(animationScene('.secAnim-barGraph', 'translate-right').restart())
        //     .add(animationScene('.secAnim-justSpendSome', 'translate-up').restart())
        //     .add(animationScene('.secAnim-thankYouAnd', 'scale-up').restart())

    // moveElements.forEach(function (elem,index) {
    //     let temBgColor = document.querySelector(".secAnim:nth-child("+(index+1)+") .bgColor").getAttribute("fill")
    //     stMainTl
    //         .set(".secAnim:nth-child("+(index+1)+")",{autoAlpha:1},(index == 0) ? ">" : "<-4" )
    //         // .set(elem,{scale:5,transformOrigin:"50% 50%"},"<")
    //         .to(".main_animation_container",{duration:3,background:temBgColor,ease:"sine.inOut"},"<")
    //         .from(elem,{duration:3,scale:0.5,autoAlpha:0,transformOrigin:"50% 50%",ease:"power4.inOut",stagger:{each:0.2,from:"end"}},"<")

    //         .to(elem,{duration:5,scale:2,transformOrigin:"50% 50%",ease:"sine.in",stagger:{each:0.3,from:"end"}},"<+5")
    //         .to(elem,{duration:0.2,autoAlpha:0,ease:"none",stagger:{each:0.3,from:"end"}},"<+3")
    //         .set(".secAnim:nth-child("+(index+1)+")",{autoAlpha:0},">")
    // })
        // .set(".secAnim1",{autoAlpha:1})
        // .from(moveElements.sc1,{duration:3,scale:0.5,autoAlpha:0,transformOrigin:"50% 50%",ease:"sine.out",stagger:{each:0.2,from:"end"}},"<")
        //
        // .to(moveElements.sc1,{duration:5,scale:5,transformOrigin:"50% 50%",ease:"sine.in",stagger:{each:0.5,from:"end"}},"<+5")
        // .to(moveElements.sc1,{duration:0.2,autoAlpha:0,ease:"none",stagger:{each:0.5,from:"end"}},"<+3")
        // .set(".secAnim1",{autoAlpha:1},">")
        //
        // .set(".secAnim2",{autoAlpha:1},"<-6")
        // .from(moveElements.sc2,{duration:3,scale:0.5,autoAlpha:0,transformOrigin:"50% 50%",ease:"sine.out",stagger:{each:0.2,from:"end"}},"<")
        //
        // .to(moveElements.sc2,{duration:5,scale:5,transformOrigin:"50% 50%",ease:"sine.in",stagger:{each:0.5,from:"end"}},"<+5")
        // .to(moveElements.sc2,{duration:0.2,autoAlpha:0,ease:"none",stagger:{each:0.5,from:"end"}},"<+3")
        // .set(".secAnim2",{autoAlpha:1},">")



        // .from([pointArrG],{duration:4,scale:0,autoAlpha:0,transformOrigin:"50% 50%",stagger:{amount:2,from:"end"}},"<")
        // .set(".secAnim1",{autoAlpha:0})
        // .set(".main_animation_container",{background:"linear-gradient(110deg, rgba(0,31,72,1) 0%, rgba(0,192,241,1) 0%, rgba(0,192,241,1) 100%, rgba(255,255,255,1) 100%)"},"<")
        //
        // .to(".main_animation_container",{duration:4,background:"linear-gradient(110deg, rgba(0,31,72,1) 0%, rgba(0,192,241,1) 0%, rgba(0,192,241,1) 0%, rgba(255,255,255,1) 0%)"},"+=3")
        // .to(".secAnim2",{duration:2,z:1000,ease:"sine.in"},"<")
        // .to([pointArrG],{duration:4,scale:5,transformOrigin:"50% 50%",stagger:{amount:2,from:"end"}},"<")
        // .from(".secAnim3 .imgBg, .secAnim3 h2",{duration:4,scale:0.1,autoAlpha:0,transformOrigin:"50% 50%",stagger:{amount:2,from:"end"}},"<")
        //
        // // .to(".main_animation_container",{duration:1,background:"linear-gradient(110deg, rgba(0,31,72,1) 0%, rgba(0,192,241,1) 0%, rgba(0,192,241,1) 0%, rgba(165,205,56,1) 0%)"},"<")
        // .set(".secAnim2",{autoAlpha:0})
        // .set(".main_animation_container",{duration:1,background:"linear-gradient(110deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%, rgba(0,192,241,1) 100%, rgba(0,192,241,1) 100%)"},"<")
        //
        // .to([".secAnim3 .imgBg",".secAnim3 h2"],{duration:2,scale:5,transformOrigin:"50% 50%",ease:"sine.in",stagger:{amount:1,from:"start"}},"+=3")
        // .to(".secAnim3",{duration:2,z:1000,ease:"sine.in"},"<")
        // .from([".secAnim4 .imgBg",".secAnim4 h2"],{duration:4,scale:0.1,autoAlpha:0,transformOrigin:"50% 50%",stagger:{amount:2,from:"end"}},"<")
        // .to(".main_animation_container",{duration:4,background:"linear-gradient(110deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(0,192,241,1) 0%, rgba(0,192,241,1) 0%)"},"<")
        // .set(".secAnim3",{autoAlpha:0})


    gsap.set(".main_animation_container",{opacity:1})

    // GSDevTools.create({paused:true,id:"stMainTl",animation:stMainTl,inTime: 0})

}
setTimeout(()=>{
    anim()
},2000)



    getFile("assets/img/greetingsBg copy.svg", '.main_animation_container .secAnim-greetings .imgBg', null)
    getFile("assets/img/greetings copy.svg", '.main_animation_container .secAnim-greetings .imgCon', null)

    getFile("assets/img/thankYouForBg copy.svg", '.main_animation_container .secAnim-thankYouFor .imgBg', null)
    getFile("assets/img/thankYouFor copy.svg", '.main_animation_container .secAnim-thankYouFor .imgCon', null)

    getFile("assets/img/brainBg copy.svg", '.main_animation_container .secAnim-brain .imgBg', null)
    getFile("assets/img/brain copy.svg", '.main_animation_container .secAnim-brain .imgCon', null)

    getFile("assets/img/triangles copy.svg", '.main_animation_container .secAnim-triangles .imgCon', null)

    getFile("assets/img/andThoseChoicesBg copy.svg", '.main_animation_container .secAnim-andThoseChoices .imgBg', null)
    getFile("assets/img/andThoseChoices copy.svg", '.main_animation_container .secAnim-andThoseChoices .imgCon', null)

    getFile("assets/img/2455inRewardsBg copy.svg", '.main_animation_container .secAnim-2455inRewards .imgBg', null)
    getFile("assets/img/2455inRewards copy.svg", '.main_animation_container .secAnim-2455inRewards .imgCon', null)

    getFile("assets/img/745BalanceBg copy.svg", '.main_animation_container .secAnim-745Balance .imgBg', null)
    getFile("assets/img/745Balance copy.svg", '.main_animation_container .secAnim-745Balance .imgCon', null)

    getFile("assets/img/2022SeasonBg copy.svg", '.main_animation_container .secAnim-2022Season .imgBg', null)
    getFile("assets/img/2022Season copy.svg", '.main_animation_container .secAnim-2022Season .imgCon', null)

    getFile("assets/img/1250inRewardsBg copy.svg", '.main_animation_container .secAnim-1250inRewards .imgBg', null)
    getFile("assets/img/1250inRewards copy.svg", '.main_animation_container .secAnim-1250inRewards .imgCon', null)

    getFile("assets/img/2022Season2Bg copy.svg", '.main_animation_container .secAnim-2022Season2 .imgBg', null)
    getFile("assets/img/2022Season2 copy.svg", '.main_animation_container .secAnim-2022Season2 .imgCon', null)

    getFile("assets/img/asYouPlanBg copy.svg", '.main_animation_container .secAnim-asYouPlan .imgBg', null)
    getFile("assets/img/asYouPlan copy.svg", '.main_animation_container .secAnim-asYouPlan .imgCon', null)

    getFile("assets/img/considerBg copy.svg", '.main_animation_container .secAnim-consider .imgBg', null)
    getFile("assets/img/consider copy.svg", '.main_animation_container .secAnim-consider .imgCon', null)

    getFile("assets/img/laptopBg copy.svg", '.main_animation_container .secAnim-laptop .imgBg', null)
    getFile("assets/img/laptop copy.svg", '.main_animation_container .secAnim-laptop .imgCon', null)

    getFile("assets/img/andThisYear copy.svg", '.main_animation_container .secAnim-andThisYear .imgCon', null)

    getFile("assets/img/barGraphBg copy.svg", '.main_animation_container .secAnim-barGraph .imgBg', null)
    getFile("assets/img/barGraph copy.svg", '.main_animation_container .secAnim-barGraph .imgCon', null)

    getFile("assets/img/justSpendSomeBg copy.svg", '.main_animation_container .secAnim-justSpendSome .imgBg', null)
    getFile("assets/img/justSpendSome copy.svg", '.main_animation_container .secAnim-justSpendSome .imgCon', null)

    getFile("assets/img/justSendAllBg copy.svg", '.main_animation_container .secAnim-justSendAll .imgBg', null)
    getFile("assets/img/justSendAll copy.svg", '.main_animation_container .secAnim-justSendAll .imgCon', null)

    getFile("assets/img/thankYouAndBg copy.svg", '.main_animation_container .secAnim-thankYouAnd .imgBg', null)
    getFile("assets/img/thankYouAnd copy.svg", '.main_animation_container .secAnim-thankYouAnd .imgCon', null)

    getFile("assets/img/plus copy.svg", '.main_animation_container .secAnim-plus .imgCon', null)

    getFile("assets/img/endScene copy.svg", '.main_animation_container .secAnim-endScene .imgCon', null)

    //
    getFile("assets/img/Dots_N_Lines copy.svg", '.pointBgPre', null)
    getFile("assets/img/DotsRectScena1 copy.svg", '.pointBgScena1', null)

