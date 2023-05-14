import * as activityService from "../services/activity.service";

export const createActivityController =  async ({}, res: any) => {
  try {
    await activityService.deleteActivities();
    const activityList = await activityService.getRandomActivities();
    if (!activityList) return res.status(404).send("Error getting the list of activities.");
    const activity = await activityService.createActivity(activityList);
    res.status(200).send(activity);
  } catch (error) {
    console.log("Error creating the activities: ", error);
    res.status(500).send(`${error}`);
  }
}

export const listActivityController =  async ({}, res: any) => {
  try {
    const activity = await activityService.listActivity();
    res.status(200).send(activity);
  } catch (error) {
    console.log("Error getting the list of activities: ", error);
    res.status(500).send(`${error}`);
  }
}

export const fetchActivity = async (req: any, res: any) => {
  try {
    const { type } = req.query;
    const activity = await activityService.getActivity(type);
    res.status(200).send(activity);
  } catch (error) {
    console.error(error);
    res.status(500).send(`${error}`);
  }
}

export const clearActivitiesController = async ({}, res: any) => {
  try {
    await activityService.deleteActivities();
    res.status(200).send(await activityService.listActivity());
  } catch (error) {
    console.log("Error deleting activities: ", error);
    res.status(500).send(`${error}`);
  }
}