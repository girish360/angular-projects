import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorkoutDetailsPage } from '../workout-details/workout-details';

import { WorkoutsProvider } from '../../providers/workouts/workouts';
/**
 * Generated class for the WorkoutsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
})
export class WorkoutsPage implements OnInit {
	workouts: any[];
	
  constructor(public navCtrl: NavController, public navParams: NavParams, private workoutsprovider:WorkoutsProvider) {
  }

	ngOnInit() {
		this.workoutsprovider.getWorkouts().subscribe( workouts => {
			this.workouts = workouts;
		});
	}
	
	workoutSelected(workout) {
		this.navCtrl.push(WorkoutDetailsPage, {
			workout: workout
		})
	}
	
}