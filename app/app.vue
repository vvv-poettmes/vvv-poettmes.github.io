<template>
    <div
        class="min-h-screen mx-auto max-w-xl text-gray-800 px-4 pt-12 md:pt-24"
    >
        <header class="mb-8 space-y-1 md:space-y-2">
            <h1 class="text-3xl md:text-5xl font-semibold text-left">
                Faschingsumzug 2026
            </h1>
            <p class="text-md md:text-xl">
                des Verkehrs- & Verschönerungsverein Pöttmes e.V.
            </p>
        </header>

        <div class="text-gray-700 mb-8">
            <p class="mb-4">
                Bitte lade beide untenstehenden Dokumente herunter, fülle sie
                vollständig aus und unterschreibe sie. Schick die
                unterschriebene Anmeldung bis spätestens
                <strong>01.01.2026</strong> per E-Mail an
                <a
                    href="mailto:vvv-poettmes@web.de"
                    class="text-blue-600 hover:underline font-medium"
                >
                    vvv-poettmes@web.de</a
                >.
            </p>

            <p>
                Am <strong>03.01.2026</strong> bekommst du von uns eine
                Rückmeldung, ob du am Umzug teilnehmen kannst. Fußgruppen sind
                automatisch dabei. Für Faschingswägen gilt in diesem Jahr
                aufgrund einer Begrenzung eine Auswahl.
            </p>
        </div>

        <div class="space-y-4 w-full">
            <DownloadCard
                title="Anmeldungsformular"
                file="/anmeldung-faschingsumzug-poettmes-2026.pdf"
                description="anmeldung-faschingsumzug-poettmes-2026.pdf"
            />
            <DownloadCard
                title="Auflagen Merkblatt"
                file="/auflagen-merkblatt-1-2-faschingsumzug-poettmes-2026.pdf"
                description="auflagen-merkblatt-1-2-faschingsumzug-poettmes-2026.pdf"
            />
        </div>
    </div>
    <span></span>
</template>

<script setup>
import DownloadCard from "@/components/DownloadCard.vue";
</script>
