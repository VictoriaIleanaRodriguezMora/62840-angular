Generar un modulo shared
y ahí generar un pipe. Los pipes cómo los componentes tienen que estar en un módulo
Los pipes tmb tienen archivos de prueba y se pueden evitar

ng g module shared
ng g pipe shared/pipes/fullName --skip-tests --standalone-false
ng g pipe shared/pipes/fullName2 --skip-tests --standalone-false

ng g directive  shared/directives/highlight --skip-tests 


