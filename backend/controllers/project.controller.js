import projectModel from '../models/project.model.js';
import * as projectService from '../services/project.service.js';
import userModel from '../models/user.model.js';
import { validationResult } from 'express-validator';



export const createProjectController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name } = req.body;
        const { email } = req.user;
        const loggedInUserId = await userModel.findOne({ email })
        const userId = loggedInUserId._id;

        const newProject = await projectService.createProject({
            name, userId
        })
        res.status(201).json({
            message: 'Project created successfully',
            project: newProject
        })
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }



}

// export const getAllProject = async (req, res) => {
//     try {

//         const loggedInUser = await userModel.findOne({
//             email: req.user.email
//         })

//         const allUserProjects = await projectService.getAllProjectByUserId({
//             userId: loggedInUser._id
//         })

//         return res.status(200).json({
//             projects: allUserProjects
//         })

//     } catch (err) {
//         console.log(err)
//         res.status(400).json({ error: err.message })
//     }
// }

export const getAllProject = async (req, res) => {
    try {
        const allUserProjects = await projectService.getAllProjectByUserId({
            userId: req.user._id
        });

        return res.status(200).json({
            projects: allUserProjects
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
}

export const addUserToProject = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { projectId, users } = req.body;
        const loggedInUser = await userModel.findOne({
            email: req.user.email
        })

        const project = await projectService.addUsersToProject({
            projectId,
            users,
            userId: loggedInUser._id
        })
        return res.status(200).json({
            message: 'Users added to project successfully',
            project
        })




    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
}

export const getProjectById = async (req, res) => {
    const { projectId } = req.params;

    try {
        const project = await projectService.getProjectById({
            projectId
        })

        return res.status(200).json({
            project
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
}



