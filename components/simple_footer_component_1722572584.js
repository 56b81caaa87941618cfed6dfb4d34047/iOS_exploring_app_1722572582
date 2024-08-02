/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722572584", {
    template: `
    <footer id="footer-section" style="min-height: 390px"   class="flex-1 bg-gradient-to-br from-pink-400 via-purple-500 to-black backdrop-filter backdrop-blur-lg bg-opacity-30">
            <div id="footer-container" class="max-w-screen-xl p-8 py-12 mx-auto lg:py-16 md:p-12 lg:p-16 rounded-3xl shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-md">
                <hr id="footer-divider" class="my-8 border-purple-300 sm:mx-auto lg:my-10 opacity-30">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-3xl font-bold text-white">
                            <img id="footer-logo" src="https://makeinfinite-mentat-test.azurewebsites.net/get_image/tmpdhj5cw1d/logo.svg" class="h-8 mr-4 sm:h-10 filter drop-shadow-lg" alt="Landwind Logo" />
                            Iris Explorer: Unlock iOS
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-lg text-center text-white font-medium leading-relaxed">
                        Iris Explorer is the ultimate iOS utility app, empowering you to explore, customize, and optimize your iPhone or iPad like never before. Dive deep into the iOS ecosystem, uncover hidden features, and tailor your device to perfection.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
