qx.Class.define('nqx.application.Dummy', {
    extend: qx.application.Basic,

    members: {
        main: function() {
            this.base(arguments);
            if (qx.core.Environment.get("qx.debug"))
            {
                qx.log.appender.Native;
                qx.log.appender.Console;
            }
        }
    }
});
