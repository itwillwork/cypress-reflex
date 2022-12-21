const getCypressReflexEnv = (config) => {
	return {
		shouldUpdateScreenshots: config.env.update,
		shouldUpdateFixtures: config.env.update,
	}
}

module.exports = {
	getCypressReflexEnv,
}