class LogoCanvas {

    constructor() {
        this.width = 256;
        this.height = 256;
        this.radius = 128;

        this.onDownload = this.onDownload.bind(this);

        this.initSelector();
        this.draw();
        this.initEvent();
    }

    initSelector() {
        this.canvas = document.getElementById('canvas_logo');

        this.canvas.height = this.height + 4;
        this.canvas.width = this.width + 4;
        this.ctx = this.canvas.getContext('2d');

        this.btnDownload = document.getElementById('btn_download');
    }

    draw() {

        const ctx = this.ctx;
        const width = this.width;
        const height = this.height;
        const radius = this.radius;
        const offsetX = 2;
        const x = width / 2 + offsetX;

        ctx.beginPath();
        ctx.arc(x, height / 2, radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'transparent'
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, height / 2, radius, Math.PI * 0.5, Math.PI * 1.5);
        ctx.fillStyle = 'white';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, height / 2, radius, Math.PI * 1.5, Math.PI * 0.5);
        ctx.fillStyle = 'black';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, height / 2 - radius / 2, radius / 2, Math.PI * 0.5, Math.PI * 1.5);
        ctx.fillStyle = 'black';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, height / 2 + radius / 2, radius / 2, Math.PI * 1.5, Math.PI * 0.5);
        ctx.fillStyle = 'white';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, height / 2 - radius / 2, radius / 8, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, height / 2 + radius / 2, radius / 8, 0, Math.PI * 2);
        ctx.fillStyle = 'black';
        ctx.fill();
    }

    initEvent() {
        this.btnDownload.onclick = this.onDownload;
    }

    onDownload() {
        console.log(this)
        this.canvas.toBlob((blob) => {
            const tmpHref = document.createElement('a');
            const container = document.getElementById('container');
            document.body.appendChild(tmpHref);
            tmpHref.download = 'balance-logo.png';
            tmpHref.href = window.URL.createObjectURL(blob);
            tmpHref.click();
            container.parentNode.removeChild(tmpHref);
        })
    }
}
