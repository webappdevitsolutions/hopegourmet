gsap.registerPlugin(ScrollTrigger);

    const contents = gsap.utils.toArray("#horizontal .contant");

    // Horizontal Scroll Effect
    gsap.to(contents, {
        xPercent: -100 * (contents.length - 1),
        scrollTrigger: {
            trigger: "#horizontal",
            pin: true,
            scrub: 1,
            end: "+=" + window.innerWidth * contents.length
        }
    });

    // Fix: Front Page Loads Instantly
    gsap.set(contents[0].querySelector(".text-wrapper"), { opacity: 1, y: 0 });

    // Smooth Scrolling Animation for Each Section
    contents.forEach((contant, index) => {
        if (index === 0) return; // Skip first section (already visible)

        const textWrapper = contant.querySelector(".text-wrapper");
        const title = textWrapper.querySelector("h1");
        const paragraph = textWrapper.querySelector("p");

        gsap.set(textWrapper, { opacity: 0, y: 50 });

        gsap.to(textWrapper, {
            opacity: 1,
            y: 0,
            duration: 1.5, // Smooth fade-in speed
            ease: "power2.out",
            scrollTrigger: {
                trigger: contant,
                start: "top 60%", // Starts when section enters viewport
                toggleActions: "play none none none" // Plays once, doesn't reverse
            }
        });

        gsap.from([title, paragraph], {
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.4, // Title appears, then paragraph slightly after
            scrollTrigger: {
                trigger: contant,
                start: "top 60%",
                toggleActions: "play none none none"
            }
        });
    });

    gsap.from(".about_text h1", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".about_text h3", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power2.out",
    delay: 0.2,
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".about_text p", {
    opacity: 0,
    y: 50,
    duration: 1.8,
    ease: "power2.out",
    delay: 0.4,
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".btn", {
    opacity: 0,
    scale: 0.9,
    duration: 1.5,
    ease: "elastic.out(1, 0.5)",
    delay: 0.6,
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});