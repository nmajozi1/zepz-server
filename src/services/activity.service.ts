import axios from 'axios';
import { url } from '../../config/config.json'
import { ActivityModel } from '../db/activity.model';
import { IActivityList } from '../interfaces/activity.interface';


export const createActivity = async (activityList: IActivityList[]) => {
  try {
    return await ActivityModel.insertMany(activityList);
  } catch (error) {
    throw new Error('Unable to create the activity');
  }
}

export const getRandomActivities = async () => {
  try {
    const activities = [];
    for (let x = 0; x < 20; x++) {
      activities.push(axios.get(url));
    }
    const responses = await Promise.all(activities);
    return responses.map(response => response.data);
  } catch (error) {
    throw new Error('Unable to retrieve the activity');
  }
}

export const listActivity = async () => {
  try {
    return await ActivityModel.find();
  } catch (error) {
    throw new Error('Unable to retrieve the list of activities');
  }
}

export const getActivity = async (type: string) => {
  try {
    const activity = await ActivityModel.find({ type });
    if (activity.length < 1) throw new Error(`Activity of type ${type} not found.`);
    return activity;
  } catch (error) {
    throw new Error(`Activity of type ${type} not found.`);
  }
}

export const deleteActivities = async () => {
  try {
    return await ActivityModel.deleteMany({});
  } catch (error) {
    throw new Error('Unable to delete the activities');
  }
}