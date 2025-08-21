import React from "react";
import { motion } from "framer-motion";

export default function Certifications() {
  const certifications = [
    {
      year: "2022",
      title: "DevOps Foundation",
      issuer: "DevOps Institute",
      logo: "http://haroldjacquot.free.fr/images/favicon_DevOpsInstitute.png",
      link: "http://haroldjacquot.free.fr/DOFD_DevOps.pdf"
    },
    {
      year: "2021",
      title: "MOOC SecNumacadémie - Cyber Sécurité",
      issuer: "ANSSI",
      logo: "http://haroldjacquot.free.fr/images/favicon_ANSSI.png",
      link: "https://secnumacademie.gouv.fr"
    },
    {
      year: "2018",
      title: "PRINCE2 Foundation",
      issuer: "Cegos",
      logo: "http://haroldjacquot.free.fr/images/favicon_Cegos.png",
      link: "http://haroldjacquot.free.fr/Cegos_PRINCE2.pdf"
    },
    {
      year: "2015",
      title: "ITIL Foundation 2011",
      issuer: "Learning Tree",
      logo: "http://haroldjacquot.free.fr/images/favicon_learningtree.png",
      link: "http://haroldjacquot.free.fr/LearningTree_ITIL_Foundation_fr.pdf"
    },
    {
      year: "2017",
      title: "Architecture sur AWS",
      issuer: "AWS",
      logo: "http://haroldjacquot.free.fr/images/favicon_AWS.png",
      link: "http://haroldjacquot.free.fr/AWS_ARC_fr.pdf"
    },
    {
      year: "2016",
      title: "Performances des applications",
      issuer: "Orsys",
      logo: "http://haroldjacquot.free.fr/images/favicon_Orsys.png",
      link: "http://haroldjacquot.free.fr/ORSYS_PFR.pdf"
    },
    {
      year: "2014",
      title: "SMP 2.3 Fundamentals",
      issuer: "SAP",
      logo: "http://haroldjacquot.free.fr/images/favicon_SMP.png",
      link: "http://haroldjacquot.free.fr/SAP_MOB01_SMP_2.3.pdf"
    },
    {
      year: "2012",
      title: "Méthodes agiles de gestion de projets",
      issuer: "Orsys",
      logo: "http://haroldjacquot.free.fr/images/favicon_Orsys.png",
      link: "http://haroldjacquot.free.fr/ORSYS_MAG.pdf"
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-8 text-center">
        Certifications & Formations complémentaires
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-lg transition bg-white dark:bg-gray-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              src={cert.logo}
              alt={cert.issuer}
              className="w-5 h-5 object-contain mr-4"
            />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-gray-100">{cert.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {cert.issuer} • {cert.year}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}