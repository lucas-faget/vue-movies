<script>
    export default {
        name: 'RadialProgressBar',
        props: ['progress', 'value', 'label'],
		data() {
			return {
				maxProgress: this.progress < 0 ? 0 : this.progress > 1 ? 1 : this.progress,
				currentProgress: 0.0,
				pathData: "M 0 0"
			}
		},
		methods: {
			clamp(n, min, max) {
				return Math.max(min, Math.min(max, n)); 
			},
			drawProgress(percent) {
				if (isNaN(percent)) {
					return;
				}

				percent = this.clamp(parseFloat(percent), 0, 1);

				let angle = this.clamp(percent * 360, 0, 359.99999);
				let paddedRadius = 50 + 1;
				let radians = (angle * Math.PI / 180);
				let x = Math.sin(radians) * paddedRadius;
				let y = Math.cos(radians) * - paddedRadius;
				let mid = (angle > 180) ? 1 : 0;
				this.pathData = 'M 0 0 v -%@ A %@ %@ 1 '.replace(/%@/gi, paddedRadius)
					+ mid + ' 1 '
					+ x + ' '
					+ y + ' z';
			}
		},
		mounted() {
			this.drawProgress(this.currentProgress);

			let interval = window.setInterval(() => {
				this.currentProgress = this.currentProgress + 0.01;
				if (this.currentProgress >= this.maxProgress) {
					window.clearInterval(interval);
				}
				this.drawProgress(this.currentProgress);
			}, 10);
		}
    }
</script>

<template>
    <svg class="progress-radial" width="100px" height="100px" viewBox="0 0 100 100" shape-rendering="geometricPrecision">
	<defs>
		<mask id="circle_mask" x="0" y="0" width="100" height="100" maskUnits="userSpaceOnUse">
			<circle cx="50" cy="50" r="51" stroke-width="0" fill="black" opacity="1"/>
			<circle cx="50" cy="50" r="50" stroke-width="0" fill="white" opacity="1"/>
			<circle class="progress-radial-mask-inner" cx="50" cy="50" r="40" stroke-width="0" fill="black" opacity="1"/>
		</mask>
	</defs>
		<g mask="url(#circle_mask)">
			<circle class="progress-radial-track" cx="50" cy="50" r="50" stroke-width="0" opacity="1"/>
			<path class="progress-radial-bar" transform="translate(50, 50)" 
				:d="pathData">
			</path>
		</g>
	</svg>

	<div class="text">
		<span class="value">
			{{ value }}
		</span>
		<span class="label">
			{{ label }}
		</span>
	</div>
</template>
  
<style scoped>
	.progress-radial {
		background: hsl(0, 0%, 20%);
		border-radius: 50%;
	}
	.progress-radial-track {
		fill: #000;
	}

	.progress-radial-bar {
		fill: var(--color-gold); 
	}

	.text {
		position: absolute;
		width: 100px;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3px;
	}

	.value {
		color: hsl(0, 0%, 95%);
		font-size: 30px;
	}

	.label {
		color: hsl(0, 0%, 70%);
		font-size: 15px;
		padding-bottom: 10px;
	}
</style>
