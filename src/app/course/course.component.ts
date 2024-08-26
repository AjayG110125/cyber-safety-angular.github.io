import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  isPlaying = false;
  isMuted = true;

  togglePlayPause() {
    const video = this.videoPlayer.nativeElement;
    if (video.paused) {
      video.play();
      this.isPlaying = true;
    } else {
      video.pause();
      this.isPlaying = false;
    }
  }

  toggleMute() {
    const video = this.videoPlayer.nativeElement;
    video.muted = !video.muted;
    this.isMuted = video.muted;
  }
}
