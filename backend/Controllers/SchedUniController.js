const FUniModel = require('../Models/FormsScheduleUni.js');
const PersonalData = require('../Models/PersonalData.js');


exports.createScheduleUni = async (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const dob = req.body.dob;
    const nationality = req.body.nationality;
    const lastEducation = req.body.lastEducation;
    const yearOfGraduation = req.body.yearOfGraduation;
    const studyField = req.body.studyField;
    const englishSkill = req.body.englishSkill;
    const gender = req.body.gender;
    const university = req.body.university;
    const major = req.body.major;
    const degree = req.body.degree;
    const consultationPackage = req.body.consultationPackage;


    try{
        const personalData = await PersonalData.findOne({email : email});
        const allData = await PersonalData.find();

        if(personalData){
            const id = personalData.userId;
            
            const FUni = await FUniModel.create({
                id,
                name,
                email,
                dob,
                nationality,
                lastEducation,
                yearOfGraduation,
                studyField,
                englishSkill,
                gender,
                university,
                major,
                degree,
                consultationPackage
            })

            console.log("Form Schedule: Uni Created (Pre-existing User");
            res.status(201).json({success: true, data: FUni, message: "Schedule Uni Form Created"});
        }
        else{
            const id = allData.length + 1;

            const FUni = await FUniModel.create({
                id,
                name,
                email,
                dob,
                nationality,
                lastEducation,
                yearOfGraduation,
                studyField,
                englishSkill,
                gender,
                university,
                major,
                degree,
                consultationPackage
            })

            console.log("Form Schedule: Uni Created");
            res.status(201).json({success: true, data: FUni, message: "Schedule Uni Form Created"});
        }
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
}

exports.deleteScheduleUni = async (req, res) =>{

    const id = req.params;

    try{
        const FUni = await FUniModel.findByIdAndDelete({userId : id});

        if (FUni){
            console.log("Form Uni Schedule Deleted");
            res.status(200).json({message: "Form Deleted"});
        }
        else{
            res.status(404).json({message: "Form Uni SChedule Not Found"});
        }
    }
    catch(err){
        res.status(500).json({error : err.message});
    }
}

exports.updateScheduleUni = async (req, res) => {

    const id = req.params;

    try{

        const FUni = await FUniModel.findByIdAndUpdate({userId : id}, req.body, {new : true});

        if (FUni){
            console.log("Form Uni Schedule Updated");
            res.status(200).json({message: "Form Updated"});
        }
        else{
            res.status(404).json({message: "Form Uni Schedule Not Found"});
        }
    }
    catch(err){
        res.status(500).json({error : err.message});
    }
}

exports.getScheduleUni = async (req, res) => {

    const id = req.params;

    try{
        const FUni = await FUniModel.findById({userId : id});

        if (FUni){
            console.log("Form Uni Schedule Found");
            res.status(200).json({data: FUni});
        }
        else{
            res.status(404).json({message: "Form Uni Schedule Not Found"});
        }
    }
    catch(err){
        res.status(500).json({error : err.message});
    }
}

exports.getAllScheduleUni = async (req, res) => {
    
        try{
            const FUni = await FUniModel.find();
    
            if (FUni){
                console.log("Form Uni Schedule Found");
                res.status(200).json({data: FUni});
            }
            else{
                res.status(404).json({message: "Form Uni Schedule Not Found"});
            }
        }
        catch(err){
            res.status(500).json({error : err.message});
        }
    }