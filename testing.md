


unitTests.qunit.js muss so sein (boilerplate) wegen Timing und Reihenfolge:
- autostart bevor qunit loslegt
- keine module imports, weil das mit async und <script> nicht geht
- also sap.ui.getCore() und ein sap.ui.require()

ähnlich für OpaTests