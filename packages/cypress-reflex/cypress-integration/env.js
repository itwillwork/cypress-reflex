const getCypressReflexEnv = (config) => {
	const shouldUpdateScreenshots = config.env.updateScreenshots;

	return {
		shouldUpdateScreenshots,
		screenshotsFolder: shouldUpdateScreenshots ? './' : './screenshots'
	}
}

module.exports = {
	getCypressReflexEnv,
}