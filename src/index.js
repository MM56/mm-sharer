/**
 * Sharer class
 *
 * @class
 *
 * @license {@link https://opensource.org/licenses/MIT|MIT}
 *
 * @example
 * Sharer.facebook("http://www.google.fr");
 */
const Sharer = {
	DEFAULT_POPUP_SIZES: {
		default: {
			width: 500,
			height: 320
		},
		fb: {
			width: 555,
			height: 320
		},
		linkedIn: {
			width: 500,
			height: 310
		},
		twitter: {
			width: 500,
			height: 310
		},
		pinterest: {
			width: 750,
			height: 320
		}
	},

	/**
	 * Returns Facebook sharing URL
	 * 
	 * @param {string} url 
	 * @returns {string} Facebook sharing URL
	 */
	getFacebookURL: function(url) {
		return 'http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
	},

	/**
	 * Opens a popup for sharing on Facebook
	 * 
	 * @param {string} url 
	 */
	facebook: function(url) {
		const width = this.DEFAULT_POPUP_SIZES.fb.width;
		const height = this.DEFAULT_POPUP_SIZES.fb.height;

		const link = this.getFacebookURL(url);
		this.openPopup(link, width, height);
	},

	/**
	 * Returns LinkedIn sharing URL
	 * 
	 * @param {string} url 
	 * @param {string} [title=null] 
	 * @param {string} [description=null] 
	 * @returns {string} LinkedIn sharing URL
	 */
	getLinkedInURL: function(url, title = null, description = null) {
		// prevent caching because LinkedIn cache is shit
		url += '?t=' + Date.now();

		let link = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url);
		if(title) {
			link += '&title=' + encodeURIComponent(title);
		}
		if(description) {
			link += '&summary=' + encodeURIComponent(description);
		}

		return link;
	},

	/**
	 * Opens a popup for sharing on LinkedIn
	 * 
	 * @param {string} url 
	 * @param {string} [title=null] 
	 * @param {string} [description=null] 
	 */
	linkedIn: function(url, title = null, description = null) {
		const width = this.DEFAULT_POPUP_SIZES.linkedIn.width;
		const height = this.DEFAULT_POPUP_SIZES.linkedIn.height;

		const link = this.getLinkedInURL(url, title, description);

		this.openPopup(link, width, height);
	},

	/**
	 * Returns Twitter sharing URL
	 * 
	 * @param {string} text 
	 * @param {Array.<string>} [hashtags=[]] 
	 * @param {string} [url=null] 
	 * @returns {string} Twitter sharing URL
	 */
	getTwitterURL: function(text, hashtags = [], url = null) {
		let link = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text);
		if (hashtags.length) {
			link += '&hashtags=' + hashtags.join(',');
		}
		if (url) {
			link += '&url=' + encodeURIComponent(url);
		}
		return link;
	},

	/**
	 * Opens a popup for sharing on Twitter
	 * 
	 * @param {string} text
	 * @param {Array.<string>} [hashtags=[]]
	 * @param {string} [url=null]
	 */
	twitter: function(text, hashtags = [], url = null) {
		const width = this.DEFAULT_POPUP_SIZES.twitter.width;
		const height = this.DEFAULT_POPUP_SIZES.twitter.height;

		const link = this.getTwitterURL(text, hashtags, url);

		this.openPopup(link, width, height);
	},

	/**
	 * Returns Pinterest sharing URL
	 * 
	 * @param {string} media
	 * @param {string} url
	 * @param {string} desc
	 * @returns {string} Pinterest sharing URL
	 */
	getPinterestURL: function(media, url = '', desc = '') {
		let link = 'https://www.pinterest.com/pin/create/button/?media=' + encodeURIComponent(media);
		link += '&url=' + encodeURIComponent(url);
		link += '&description=' + encodeURIComponent(desc);
		return link;
	},

	/**
	 * Opens a popup for sharing on Pinterest
	 * 
	 * @param {string} media
	 * @param {string} url
	 * @param {string} desc
	 */
	pinterest: function(media, url = '', desc = '') {
		const width = this.DEFAULT_POPUP_SIZES.pinterest.width;
		const height = this.DEFAULT_POPUP_SIZES.pinterest.height;

		const link = this.getPinterestURL(media, url, desc);

		this.openPopup(link, width, height);
	},

	/**
	 * Opens a popup
	 * 
	 * @param {any} link 
	 * @param {any} [width=this.DEFAULT_POPUP_SIZES.default.width] 
	 * @param {any} [height=this.DEFAULT_POPUP_SIZES.default.height] 
	 */
	openPopup: function(
		link,
		width = this.DEFAULT_POPUP_SIZES.default.width,
		height = this.DEFAULT_POPUP_SIZES.default.height
	) {
		const left = (window.innerWidth - width) * .5;
		const top = (window.innerHeight - height) * .5;
		const options = [
			'width=' + width,
			'height=' + height,
			'top=' + top,
			'left=' + left,
			'scrollbars=1,location=0,menubar=0,resizable=0,status=0,toolbar=0'
		].join(',');
		window.open(link, 'popupShare', options);
	}

}

export default Sharer;
