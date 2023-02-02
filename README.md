# Detector-de-controlador-MIDI

Este es un pequeño script en JavaScript que permite acceder a los dispositivos MIDI conectados y mostrar información sobre el controlador MIDI. Utiliza la API Web MIDI para solicitar acceso a los dispositivos y luego verifica si hay algún controlador MIDI conectado. Si se conecta un controlador MIDI, se muestra el nombre del modelo del controlador en una etiqueta HTML.

## Instrucciones de uso

### Método 1

1. Asegúrate de que tienes un controlador MIDI conectado a tu equipo.
2. Descarga el archivo modelo.js e index.html y abre el archivo en tu navegador.
3. Verás el nombre del modelo del controlador MIDI en una etiqueta HTML.

### Método 2

En tu documento HTML pegar lo siguiente:

```HTML
<p id="midi-info"></p>
<script src="https://zsh4k.github.io/Detector-de-controlador-MIDI/modelo.js"></script>
```

## Características

- Verifica si hay algún controlador MIDI conectado.
- Muestra el nombre del modelo del controlador MIDI en una etiqueta HTML.
- Escucha el estado de los controladores MIDI y muestra un mensaje en la consola si se conecta o desconecta un controlador MIDI.

## Tecnologías utilizadas

- JavaScript
- HTML
- API Web MIDI