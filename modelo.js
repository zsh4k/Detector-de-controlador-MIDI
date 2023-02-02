let midiAccess = null;

function updateMidiInfo() {
  if (!midiAccess) {
    navigator
      .requestMIDIAccess()
      .then((access) => {
        console.log("MIDI ready!");
        midiAccess = access;
        let output = null;
        const inputs = access.inputs;
        const outputs = access.outputs;

        access.onstatechange = (e) => {
          console.log(
            `El controlador MIDI "${e.port.name}" ha sido ${
              e.port.state === "connected" ? "conectado" : "desconectado"
            }.`
          );
          updateMidiInfo();
        };

        //  Detecta si hay algún controlador MIDI conectado
        if (inputs.size === 0 && outputs.size === 0) {
          document.querySelector("#midi-info").innerText =
            "No se ha conectado ningún controlador MIDI";
        } else {
          // get the first connected MIDI controller
          for (const input of inputs.values()) {
            output = input;
            break;
          }
          for (const out of outputs.values()) {
            output = out;
            break;
          }
          document.querySelector("#midi-info").innerText =
            "Modelo del controlador MIDI: " + output.name;
        }
      })
      .catch((error) => {
        console.error("Could not access your MIDI devices", error);
        document.querySelector("#midi-info").innerText =
          "Error al acceder a los dispositivos MIDI";
      });
  } else {
    let output = null;
    const inputs = midiAccess.inputs;
    const outputs = midiAccess.outputs;

    // Detectar si hay algún controlador MIDI conectado
    if (inputs.size === 0 && outputs.size === 0) {
      document.querySelector("#midi-info").innerText =
        "No se ha conectado ningún controlador MIDI";
    } else {
      // Obtener el primer controlador MIDI conectado
      for (const input of inputs.values()) {
        output = input;
        break;
      }
      for (const out of outputs.values()) {
        output = out;
        break;
      }
      document.querySelector("#midi-info").innerText =
        "Modelo del controlador MIDI: " + output.name;
    }
  }
}

updateMidiInfo();