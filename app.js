document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // REGISTRO
    // =========================

    const registro = document.getElementById("formRegistro");

    if (registro) {

        registro.addEventListener("submit", function (e) {

            e.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const documento = document.getElementById("documento").value;
            const correo = document.getElementById("correo").value;
            const password = document.getElementById("password").value;

            const usuario = {
                nombre: nombre,
                documento: documento,
                correo: correo,
                password: password
            };

            localStorage.setItem(
                "usuario",
                JSON.stringify(usuario)
            );

            alert("Usuario registrado correctamente.");

            window.location.href = "login.html";
        });
    }


    // =========================
    // LOGIN
    // =========================

    const login = document.getElementById("formLogin");

    if (login) {

        login.addEventListener("submit", function (e) {

            e.preventDefault();

            const correo =
                document.getElementById("correo").value;

            const password =
                document.getElementById("password").value;

            const usuario =
                JSON.parse(localStorage.getItem("usuario"));

            if (!usuario) {

                alert("Primero debe registrarse.");

                return;
            }

            if (
                correo === usuario.correo &&
                password === usuario.password
            ) {

                localStorage.setItem(
                    "sesionActiva",
                    "true"
                );

                alert("Inicio de sesión exitoso.");

                window.location.href = "citas.html";

            } else {

                alert(
                    "Correo o contraseña incorrectos."
                );
            }
        });
    }


    // =========================
    // AGENDAR CITA
    // =========================

    const formularioCita =
        document.getElementById("formCita");

    if (formularioCita) {

        formularioCita.addEventListener(
            "submit",
            function (e) {

                e.preventDefault();

                const paciente =
                    document.getElementById("paciente").value;

                const medico =
                    document.getElementById("medico").value;

                const fecha =
                    document.getElementById("fecha").value;

                const hora =
                    document.getElementById("hora").value;

                const motivo =
                    document.getElementById("motivo").value;


                const cita = {

                    paciente: paciente,

                    medico: medico,

                    fecha: fecha,

                    hora: hora,

                    motivo: motivo
                };


                localStorage.setItem(
                    "cita",
                    JSON.stringify(cita)
                );


                alert(
                    "¡Cita médica agendada correctamente!"
                );


                window.location.href =
                    "mis-citas.html";
            }
        );
    }


    // =========================
    // MOSTRAR MIS CITAS
    // =========================

    const listaCitas =
        document.getElementById("listaCitas");

    if (listaCitas) {

        const cita =
            JSON.parse(
                localStorage.getItem("cita")
            );


        if (!cita) {

            listaCitas.innerHTML =
                "<p>Actualmente no tienes citas médicas registradas.</p>";

            return;
        }


        listaCitas.innerHTML = `

            <div class="tarjeta">

                <h3>📅 Cita médica</h3>

                <p>
                    <strong>Paciente:</strong>
                    ${cita.paciente}
                </p>

                <p>
                    <strong>Médico:</strong>
                    ${cita.medico}
                </p>

                <p>
                    <strong>Fecha:</strong>
                    ${cita.fecha}
                </p>

                <p>
                    <strong>Hora:</strong>
                    ${cita.hora}
                </p>

                <p>
                    <strong>Motivo:</strong>
                    ${cita.motivo}
                </p>

                <p>
                    <strong>Estado:</strong>
                    Agendada
                </p>

            </div>

        `;
    }

});