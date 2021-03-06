import elementReady from 'element-ready';

export default async function () {
    await elementReady('yt-formatted-string.more-button.style-scope.ytd-video-secondary-info-renderer');
    await elementReady('paper-button#less.style-scope.ytd-expander');
    $('yt-formatted-string.more-button.style-scope.ytd-video-secondary-info-renderer').trigger('click');
    $('paper-button#less.style-scope.ytd-expander').hide();
}
