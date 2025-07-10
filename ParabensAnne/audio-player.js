// Player de Música
class AudioPlayer {
    constructor(playlist = []) {
        this.audio = new Audio();
        this.playlist = playlist;
        this.currentTrack = 0;
        this.isPlaying = false;
        this.volume = 0.5;
        
        // Configurar áudio
        this.audio.volume = this.volume;
        this.audio.preload = 'auto';
        
        // Persistência entre páginas
        this.loadState();
        
        this.createControls();
        this.setupEventListeners();
        this.setPageMusic(); // Configurar música baseada na página
        this.setVolume(this.volume);
        
        // Verificar se o áudio está funcionando
        console.log('AudioPlayer inicializado');
    }
    
    loadState() {
        // Carregar estado salvo do localStorage
        const savedState = localStorage.getItem('audioPlayerState');
        if (savedState) {
            const state = JSON.parse(savedState);
            this.currentTrack = state.currentTrack || 0;
            this.volume = state.volume || 0.5;
            this.isPlaying = state.isPlaying || false;
        }
    }
    
    saveState() {
        // Salvar estado no localStorage
        const state = {
            currentTrack: this.currentTrack,
            volume: this.volume,
            isPlaying: this.isPlaying
        };
        localStorage.setItem('audioPlayerState', JSON.stringify(state));
    }
    
    createControls() {
        const controls = document.createElement('div');
        controls.className = 'audio-controls';
        controls.innerHTML = `
            <button class="audio-btn" id="playPauseBtn" title="Play/Pause">
                <i class="fas fa-play"></i>
            </button>
            <button class="audio-btn" id="nextBtn" title="Próxima Música">
                <i class="fas fa-forward"></i>
            </button>
            <div class="volume-control">
                <span class="volume-icon" id="volumeIcon">🔊</span>
                <input type="range" class="volume-slider" id="volumeSlider" min="0" max="100" value="50">
            </div>
        `;
        
        document.body.appendChild(controls);
    }
    
    setupEventListeners() {
        const playPauseBtn = document.getElementById('playPauseBtn');
        const nextBtn = document.getElementById('nextBtn');
        const volumeSlider = document.getElementById('volumeSlider');
        const volumeIcon = document.getElementById('volumeIcon');
        
        // Play/Pause
        playPauseBtn.addEventListener('click', () => {
            this.togglePlay();
        });
        
        // Próxima música
        nextBtn.addEventListener('click', () => {
            this.nextTrack();
        });
        
        // Volume
        volumeSlider.addEventListener('input', (e) => {
            this.setVolume(e.target.value / 100);
        });
        
        // Volume icon click
        volumeIcon.addEventListener('click', () => {
            if (this.volume > 0) {
                this.setVolume(0);
                volumeSlider.value = 0;
            } else {
                this.setVolume(0.5);
                volumeSlider.value = 50;
            }
        });
        
        // Audio events
        this.audio.addEventListener('play', () => {
            this.isPlaying = true;
            this.updatePlayButton();
        });
        
        this.audio.addEventListener('pause', () => {
            this.isPlaying = false;
            this.updatePlayButton();
        });
        
        this.audio.addEventListener('ended', () => {
            this.isPlaying = false;
            this.updatePlayButton();
        });
        
        this.audio.addEventListener('error', (e) => {
            console.log('Erro ao carregar áudio:', e);
        });
    }
    
    loadTrack(index) {
        if (this.playlist[index]) {
            console.log('Carregando música:', this.playlist[index].title);
            this.audio.src = this.playlist[index].src;
            this.audio.load();
            
            // Verificar se o arquivo carregou corretamente
            this.audio.addEventListener('canplaythrough', () => {
                console.log('✅ Música carregada:', this.playlist[index].title);
            }, { once: true });
            
            this.audio.addEventListener('error', (e) => {
                console.error('❌ Erro ao carregar música:', this.playlist[index].title, e);
            });
            
            this.audio.addEventListener('loadstart', () => {
                console.log('🔄 Iniciando carregamento:', this.playlist[index].title);
            });
        }
    }
    
    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
        this.saveState();
    }
    
    play() {
        this.audio.play().then(() => {
            this.isPlaying = true;
            this.updatePlayButton();
            this.saveState();
        }).catch((error) => {
            console.log('Erro ao tocar música:', error);
            // Tentar novamente após interação do usuário
            document.addEventListener('click', () => {
                this.audio.play().then(() => {
                    this.isPlaying = true;
                    this.updatePlayButton();
                    this.saveState();
                }).catch(e => console.log('Erro na segunda tentativa:', e));
            }, { once: true });
        });
    }
    
    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.updatePlayButton();
        this.saveState();
    }
    
    nextTrack() {
        this.currentTrack = (this.currentTrack + 1) % this.playlist.length;
        this.loadTrack(this.currentTrack);
        if (this.isPlaying) {
            this.play();
        }
        this.saveState();
    }
    
    setVolume(value) {
        this.volume = value;
        this.audio.volume = value;
        this.updateVolumeIcon();
        this.saveState();
    }
    
    updatePlayButton() {
        const btn = document.getElementById('playPauseBtn');
        const icon = btn.querySelector('i');
        
        if (this.isPlaying) {
            icon.className = 'fas fa-pause';
            btn.classList.add('playing');
        } else {
            icon.className = 'fas fa-play';
            btn.classList.remove('playing');
        }
    }
    
    updateVolumeIcon() {
        const icon = document.getElementById('volumeIcon');
        if (this.volume === 0) {
            icon.textContent = '🔇';
        } else if (this.volume < 0.5) {
            icon.textContent = '🔉';
        } else {
            icon.textContent = '🔊';
        }
    }
    
    setPageMusic() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        // Configurar playlist baseada na página
        if (currentPage === 'parabens-final.html') {
            // Última página - música do Ayrton Senna
            this.playlist = [
                {
                    title: "Tema da Vitória - Ayrton Senna",
                    src: "musicas/Ayrton Senna - Tema da vitória.mp3"
                }
            ];
            this.currentTrack = 0;
            this.loadTrack(0);
            // Forçar tocar a música do Ayrton Senna na página final
            setTimeout(() => {
                this.play();
            }, 500);
        } else {
            // Outras páginas - manter playlist normal e continuar de onde parou
            this.playlist = [
                {
                    title: "Ai, Amor - ANAVITÓRIA",
                    src: "musicas/ANAVITÓRIA - Ai, Amor (Audio).mp3"
                },
                {
                    title: "The Night We Met - Lord Huron",
                    src: "musicas/Lord Huron - The Night We Met (Official Audio).mp3"
                },
                {
                    title: "To Build A Home - The Cinematic Orchestra",
                    src: "musicas/The Cinematic Orchestra - 'To Build A Home' (Official Video).mp3"
                }
            ];
            
            // Carregar a música atual mas não forçar play
            this.loadTrack(this.currentTrack);
            
            // Só continuar tocando se estava tocando antes
            if (this.isPlaying) {
                setTimeout(() => {
                    this.play();
                }, 500);
            }
        }
        
        // Atualizar controles
        this.updatePlayButton();
        this.updateVolumeIcon();
        
        // Testar se o áudio está funcionando
        console.log('Player inicializado. Página:', currentPage);
        console.log('Playlist:', this.playlist);
        console.log('Música atual:', this.currentTrack);
        console.log('Volume:', this.volume);
    }
}

// Inicializar o player quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar Font Awesome para ícones
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
        document.head.appendChild(link);
    }
    
    // Aguardar um pouco para garantir que tudo carregou
    setTimeout(() => {
        // Inicializar player
        window.audioPlayer = new AudioPlayer();
        
        // Iniciar música automaticamente na primeira página
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        if (currentPage === 'index.html') {
            setTimeout(() => {
                if (window.audioPlayer && !window.audioPlayer.isPlaying) {
                    window.audioPlayer.play();
                }
            }, 1500);
        }
    }, 100);
});

// Função para adicionar música personalizada
function addCustomMusic(src, title) {
    if (window.audioPlayer) {
        window.audioPlayer.playlist.push({ src, title });
        window.audioPlayer.loadTrack(window.audioPlayer.playlist.length - 1);
    }
} 