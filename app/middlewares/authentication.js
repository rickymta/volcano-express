'use strict'

/**
 * Generic require login routing middleware
 */
exports.requiredLogin = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    if (req.method === 'GET') req.session.returnTo = req.originalUrl
    res.redirect('/login')
}

exports.user = {
    hasAuthentication: (req, res, next) => {
        if (req.profile.id !== req.user.id) {
            req.flash('info', 'Unauthorization')
            return res.redirect('/users/' + req.profile.id)
        }

        next()
    }
}
