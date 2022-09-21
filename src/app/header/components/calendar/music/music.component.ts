import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
  public audio = new Audio();

  constructor() {}

  ngOnInit(): void {}

  public playAudio() {
    this.audio.src = '../../../../assets/music/elevator-music.mp3';
    this.audio.load();
    this.audio.play();
  }

  public pauseAudio() {
    this.audio.pause();
  }
}
