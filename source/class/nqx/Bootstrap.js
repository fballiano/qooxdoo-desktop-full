qx.Class.define('nqx.Bootstrap', {
    statics: {
        setApplication: function(name, theme) {
            if (theme) {
                this.setTheme(theme);
            }
            qx.core.Environment.add('qx.application', name);
        },

        setTheme: function(name) {
            delete qx.core.Environment._checks['qx.theme'];
            qx.core.Environment.add('qx.theme', name);
        },

        setDummyApplication: function() {
            qd.Bootstrap.setApplication('qd.application.Dummy');
        }
    }
});
