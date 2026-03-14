export function WhatsAppFab() {
  return (
    <div className="wa-wrap fixed right-7 bottom-7 z-[300] flex flex-col items-end gap-2">
      <div className="wa-tip pointer-events-none translate-x-2 whitespace-nowrap rounded border border-gray-100 bg-white px-4 py-2 text-sm font-medium text-[#2A1A1A] opacity-0 shadow-xl transition-all duration-300 f-dm">
        Chat with us on WhatsApp
      </div>
      <a
        href="https://wa.me/918860615795?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="wa-fab flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
          <path d="M16.002 2.667C8.638 2.667 2.667 8.637 2.667 16c0 2.358.63 4.666 1.826 6.684L2.667 29.333l6.84-1.794A13.282 13.282 0 0016.002 29.333c7.364 0 13.331-5.97 13.331-13.333 0-7.363-5.967-13.333-13.331-13.333zm0 24.267a11.004 11.004 0 01-5.608-1.535l-.402-.24-4.061 1.065 1.082-3.952-.262-.415A10.964 10.964 0 015.002 16c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.04-8.224c-.33-.165-1.953-.963-2.257-1.073-.304-.11-.524-.165-.745.165-.22.33-.854 1.073-1.046 1.293-.192.22-.385.247-.715.082-.33-.165-1.393-.513-2.654-1.638-.98-.875-1.642-1.956-1.834-2.286-.192-.33-.02-.508.145-.672.148-.147.33-.385.494-.577.165-.192.22-.33.33-.55.11-.22.055-.412-.027-.577-.083-.165-.745-1.797-1.02-2.46-.27-.647-.545-.56-.745-.57-.192-.01-.412-.012-.633-.012-.22 0-.577.082-.879.412-.302.33-1.155 1.128-1.155 2.75s1.183 3.19 1.348 3.41c.165.22 2.327 3.554 5.638 4.985.788.34 1.403.544 1.882.696.791.252 1.51.216 2.079.131.634-.094 1.953-.799 2.228-1.57.275-.77.275-1.43.192-1.569-.082-.137-.302-.22-.632-.385z" />
        </svg>
      </a>
    </div>
  );
}
