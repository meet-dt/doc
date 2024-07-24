; (function ($) {
    "use strict";

    /*============= preloader js css =============*/
    // var cites = [];
    // cites[0] = "The faster your website loads, the faster your business grows.";
    // cites[1] = "Your website's speed is your first impression, and first impressions matter.";
    // cites[2] = "A fast website is the key to keeping customers engaged and reducing bounce rates.";
    // cites[3] = "Milliseconds matter when it comes to loading times. Every second counts in the digital world.";
    // cites[4] = "Fast loading times can be the difference between a customer gained and a customer lost.";
    // cites[5] = "Speed is a feature. The faster you can make your website, the more people are going to use it.";

    // var cite = cites[Math.floor(Math.random() * cites.length)];
    // $('#preloader p').text(cite);
    // $('#preloader').addClass('loading');

    $(window).on('load', function () {
        setTimeout(function () {
            $('#preloader').fadeOut(500, function () {
                $('#preloader').removeClass('loading');
            });
        }, 500);
    })

    /*============= Banner js css =============*/
    var quotes = [];
    var sub_quotes = [];

    quotes[0] = "Innovation distinguishes between a leader and a follower.";
    sub_quotes[0] = "This highlights the importance of innovation in leading the IT industry.";

    quotes[1] = "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.";
    sub_quotes[1] = "Emphasizes the seamless integration of technology into daily life.";

    quotes[2] = "The only way to do great work is to love what you do.";
    sub_quotes[2] = "Encourages passion in work, which is crucial in the IT field.";

    quotes[3] = "Your most unhappy customers are your greatest source of learning.";
    sub_quotes[3] = "Stresses the importance of feedback and continuous improvement.";

    quotes[4] = "The science of today is the technology of tomorrow.";
    sub_quotes[4] = "Illustrates the forward-looking nature of technology and IT.";

    quotes[5] = "It's not that we use technology, we live technology.";
    sub_quotes[5] = "Reflects the pervasive nature of technology in modern life.";

    var rad_num = Math.floor(Math.random() * quotes.length);
    var quote = quotes[rad_num];
    var sub_quote = quotes[rad_num];

    $('.main_banner_title').text(quote);
    $('.main_banner_subtitle').text(sub_quote);
})(jQuery)