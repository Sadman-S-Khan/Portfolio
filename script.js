// ============================================================
// PROFILE LINKS & METRICS — single source of truth
// Edit the values below to update links/numbers everywhere on
// the site (Home hero + Contact section) in one place.
// ============================================================
const PROFILES = {
  googleScholar: {
    url: "https://scholar.google.com/citations?user=ODMTqK0AAAAJ&hl=en",
    citations: 163,
  },
  researchGate: {
    url: "https://www.researchgate.net/profile/Sadman-Khan-4",
    reads: 7000,
    citations: 66,
  },
  orcid: {
    url: "https://orcid.org/0009-0003-7727-2047",
  },
  webOfScience: {
    url: "https://www.webofscience.com/wos/author/record/QLV-4565-2026",
  },
  scopus: {
    url: "https://www.scopus.com/authid/detail.uri?authorId=59194745400",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/sadmanskhan/",
  },
  email: "sadmansadikkhan@gmail.com",
  phone: "+8801609655717",
};

// ============================================================
// PORTFOLIO DATA — Sadman Sadik Khan
// Edit this object to update any content on the site.
// ============================================================
const DATA = {
  publications: [
    { title: "Machine Learning theke Deep Learning Dharona Algorithm ebong Proyog", authors: "Sadman Sadik Khan, Md Mizanur Rahman, Md Sadekur Rahman, Aminul Haque", venue: "ISBN: 978-984-37-0559-4", publisher: "Book", year: "2026", type: "book", coverImage: "book-cover.jpg" },
    { title: "Analyzing Regional Variations in Bangla Speech: A Voice Classification Approach Using MFCCs", authors: "Md Ainul Ahsan Arman, Sadman Sadik Khan*, Aminul Haque, A S M Mahmudul Hasan, A. K. M. Rafi Uddin, Md Rafi Al Karim", venue: "AISEI 2026", publisher: "IEEE", year: "2026", type: "conference", abstract: "Automatic classification of speakers based on regional origin has applications in voice authentication, human– computer interaction, and sociolinguistic studies. This work investigates district-level voice classification for Bangla speakers from Dhaka and Chittagong. A dataset of 1,526 voice recordings was collected, and class imbalance was addressed using the RandomOverSampler algorithm, yielding 1,870 balanced samples. Mel-Frequency Cepstral Coefficients (MFCCs): MFCC was extracted and used to represent the spectral characteristics of speech. Six machine learning model i.e. Logistic Regression, Decision Tree, Random Forest, Support Vector Machine (SVM), XG Boost and Gradient Boosting models were tested on this dataset. Experimental results show Logistic Regression algorithm gave the highest accuracy (99.47%), SVM algorithm accuracy is 99.20% and Random Forest algorithm accuracy is 98.40%, which indicates that MFCC features are highly discriminative and linear separable in the point of classification the district. These results set a baseline for regional voice recognition in Bangla and show that relatively simple models can be used to get excellent performance, as a basis for more advanced work in dialect recognition, accent analysis, and broader sociolinguistics applications." },
    { title: "Road Cleanliness Classification Using Deep Learning and Vision Transformer with LIME-based Explainability", authors: "Md Rezanur Rahman, Shahriar Kabir Arnab, Sadman Sadik Khan*, Afraz Ul Haque Rupak, Shrikanta Paul", venue: "AISEI 2026", publisher: "IEEE", year: "2026", type: "conference", abstract: "Road cleanliness is a vital aspect of city management and hygiene, but nearly always traditional methods of monitoring using manual methods are costly and inefficient. The current study explores the feasibility of deep-learning models for the automated recognition of road cleanliness, using a publicly available Kaggle corpus of 237 images, which are categorized according to clean and dirty. Six pretrained Convolutional Neural Network (CNN) models were fine-tuned and compared to a Vision Transformer (ViT), MobileNetV2, ResNet50, DenseNet121, InceptionV3, VGG16, and VGG19. Before the model was trained, the images were resized spatially, normalized in intensity, and data augmented to increase generalization. The model performance was measured in terms of accuracy, precision, recall, and F1 score. VGG19 became the most accurate CNN with 96%, and ResNet50 the least accurate with 79% accuracy. The ViT has the better score, where the general accuracy was 98% with equal precision and recall. Local Interpretable Model-Agnostic Explanations (LIME) were to be used to permit easy interpretation, as they showed that salient road-surface features dominated the prediction of the model. These findings support the feasibility of ViT, as well as explainable artificial intelligence (XAI) methods, to provide high-quality and verifiable evaluations for environmental monitoring." },
    { title: "A Transfer Learning-Based Pipeline for Diabetic Retinopathy Detection and Severity Classification", authors: "Adnan Zawad Toky, Faria Afrin, Sadman Sadik Khan*, Md. Rony", venue: "ICCIT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "Diabetic retinopathy (DR) is still one of the primary causes of blindness in people of working age who could be helped by simple treatment worldwide. The traditional way of screening relies heavily on the manually graded fundus photographs of the retina, which is a time-consuming process that varies from person to person and is very hard to implement in areas with limited resources where there are few ophthalmologists. Consequently, this effectively creates a huge gap in the early detection and the timely management of DR. The research suggests a powerful transfer learning-based system aiming to detect DR automatically and classify its severity using retinal fundus photographs. A lightweight MobileNetV2 model pre-trained on ImageNet is fine-tuned on the DDR dataset in a two-stage system: (i) binary classification to detect referable DR and then (ii) five-class severity grading (No DR, Mild, Moderate, Severe, Proliferative). Class-weighted cross-entropy loss and a lot of data augmentation are very effective in reducing the problem of class imbalance. The proposed pipeline gets 92.08% accuracy in binary detection, 86.26% in multiclass grading, and 85.75% end-to-end accuracy. It is easily portable since it has only 3.4 million parameters, and the inference time is less than 15 ms for mobile devices. The system is very precise, economically affordable, and technologically reliable with a wide variety of deployment options, making it an advantageous solution for low-resource conditions capable of large-scale screening and thus helping to prevent vision loss caused by DR." },
    { title: "Deep Learning-Based Diagnosis of Keratoconus: A Comparative Study of MobileNetV2, VGG16, and InceptionV3 Models", authors: "Sadman Sadik Khan*, Md Shazedur Rahman, Kazi Hafijur Rahman Rifad, Md Atikur Rahman, Aminul Haque", venue: "RTIP2R 2025", publisher: "Springer", year: "2025", type: "conference", abstract: "This study aims to investigate the viability of convolutional neural systems (CNNs), a deep learning technique, within the early determination of keratoconus, an extreme corneal clutter with the potential to lead to blindness. Overwhelmingly, within the first decade of life, keratoconus could be a non-discriminatory infection influencing people of all genders and races. The center of this inquiry was to survey and compare the demonstrative capabilities of three unmistakable and deep CNN designs: MobileNetV2, InceptionV3, and VGG16 along with a custom MobileNetV2 model in distinguishing keratoconus-related pathologies. Through thorough exploratory investigation, it was observed that the custom MobileNetV2 model shows excellent performance with a test accuracy of 95.66%, near-perfect scores across all classes and metrics. This rate not only outperforms that of its D-CNN partners but also underscores the model’s solidity, strength, and potential for real-world application in exact keratoconus-recognizable proof. Above other models, VGG16 and InceptionV3 have average performance. It has an accuracy of 72.98% and 71.22%, respectively, while MobileNetV2 shows signs of overfitting. These measurements altogether underwrite the model’s utility as a successful demonstrative device, emphasizing its capacity to precisely recognize keratoconus cases whereas minimizing the frequency of untrue positives and negatives. The findings from this study highlight the viable appropriateness and unwavering quality of the Custom MobileNetV2 demonstrated within the early and precise location of keratoconus, displaying its potential as a critical commitment to the field of ophthalmological diagnostics." },
    { title: "Attention-Based Hybrid ViT–ResNet Model for Bangladeshi Mango Classification", authors: "Sadman Sadik Khan*, Md Shahriar Mannan Prottoy, Mahtab Chowdhury, Md. Shehabub Mobin Siam, Muhammad Shahriar Hasan, Md Atikur Rahman", venue: "RTIP2R 2025", publisher: "Springer", year: "2025", type: "conference", abstract: "Accurate identification of mango varieties is crucial to improving the quality control, sorting, and standardization of the agricultural sector of Bangladesh. This research presents a hybrid deep learning model utilising attention mechanisms that integrates Vision Transformers and ResNet50 for the classification of five principal indigenous Bangladeshi mango varieties: Amrupali, Khirsa, Lengra, Lokna, and Fazli. The model leverages the global context understanding power of the ViT and extracts local spatial features using a ResNet50 attention-guided fusion module. A custom dataset of 946 grayscale photos of mangoes was constructed to assess the model's efficacy. Experimental findings demonstrate that the proposed hybrid model surpasses several leading architectures, including DenseNet121, InceptionV3, ResNet50, and standalone ViT, achieving a classification accuracy of 84%, precision of 0.85, recall of 0.82, and F1-score of 0.83. Additionally, class-specific AUC scores varied from 0.92 to 1.00, demonstrating the model's exceptional discriminative capacity. This research sets a benchmark for mango variety classification and lays the groundwork for developing lightweight systems for real-time deployment in mobile and edge environments." },
    { title: "Brain Tumor Classification Using MobileNet–ViT with Visual Explainability through Grad-CAM", authors: "Afraz Ul Haque Rupak, Sadman Sadik Khan*, Md Saifur Rahman, Md Toufiq Imrog, Andalib Rahman Rommo, Rasel Parvez", venue: "RTIP2R 2025", publisher: "Springer", year: "2025", type: "conference", abstract: "Early and precise detection of brain tumors using MRI scans is crucial in treatment orienting and improving patient outcomes. Deep learning methods, especially CNNs, have been shown to perform very well in medical image classification but commonly fail in capturing long-range dependencies in images. To overcome this limitation, we have proposed a hybrid deep learning system that utilizes MobileNetV2 for lightweight and efficient feature extraction while relying on Vision Transformer (ViT) for global contextual learning. The model was trained and tested on a freely available Kaggle brain dataset containing 7,023 images in four classes: Glioma, Meningioma, Pituitary, and No Tumor. From the experiments, it was vouchsafed that the proposed model MobileNetV2 + ViT attains an overall accuracy of 98% and class-wise precision and recall exceeding 95%. The model achieved especially perfect classification for the No Tumor cases, eliminating false positives. Results indicate that, while the hybrid architecture improves classification performance over traditional CNNs, it also promises to serve as efficient clinical deployment for brain tumor diagnosis." },
    { title: "Lightweight Convolutional Networks and Explainable AI for Real-Time and Interpretable Tea Leaf Disease Detection", authors: "Sadman Sadik Khan*, Md Shahriar Mannan Prottoy, Mahtab Chowdhury, Md. Shehabub Mobin Siam, Muhammad Shahriar Hasan, Md Atikur Rahman", venue: "IDAA 2025", publisher: "Taylor & Francis", year: "2025", type: "conference", abstract: "Accurate and on-time diagnosis of tea leaf diseases is of crucial concern to global agricultural production and sustainability. While deep learning models, particularly Convolutional Neural Networks (CNNs), have demonstrated remark- able performance in plant disease classification, their ”black-box” nature typically prevents trust and adoption in actual farming scenarios. This paper bridges this gap by not only building a high-performance multi-class classification platform but also integrating Explainable AI (XAI) for explaining and justifying model predic- tions. We used a systematic comparative investigation of five best-performing CNN models—MobileNetV2, InceptionV3, DenseNet121, VGG16, and VGG19—to a 2,008 image dataset covering six classes: healthy, looper infested, helopelits, red spider, gray blight, and algal leaf. Our results indicate that light-weight models like Mo- bileNetV2 achieved improved performance (F1-Score: 0.98, Accuracy: 0.98), outper- forming the larger VGG models significantly. Of great significance, we employed XAI techniques, such as Grad-CAM and Saliency Maps, in attempting to visualize the dis- criminative features learned by the networks. The visualizations confirmed that the top-performing networks correctly focused on biologically plausible patterns of lesions and discolorations on the leaves, thereby providing a guarantee of credibility for the computer-aided diagnosis. This research highlights the benefit of powerful CNN mod- els for mobility and pioneers in an open, transparent framework for detecting tea leaf diseases, paving the way for trustworthy AI-enabled precision agriculture." },
    { title: "Multi-Class Classification of Moringa Leaf Diseases Using CNN Architectures and Vision Transformer", authors: "Sadman Sadik Khan*, Hejbulla Asad Shehab, Md. Ashraf Bin Alam, Md Anisur Rahman, Sudipta Das Gupta, Sadman Shamil", venue: "IDAA 2025", publisher: "Taylor & Francis", year: "2025", type: "conference", abstract: "Moringa is a nutrient-dense crop widely planted in tropical and subtropical re- gions, but its productivity is drastically affected by numerous leaf diseases. Accurate and early disease identification is necessary to maintain crop health and maximize yield. In this paper, we propose a deep learning-based system for multi- class Moringa leaf disease classification using both Convolutional Neural Networks (CNNs) and a Vision Transformer (ViT). 8,912 images were obtained from a publicly available Kaggle dataset containing four classes: Bacterial Leaf Spot (2,908 images), Yellow Leaf (2,496 images), Healthy Leaf (1,856 images), and Cercospora Leaf Spot (1,652 images). Various CNN architectures, including VGG16, VGG19, InceptionV3, MobileNetV2, and DenseNet121, were trained and compared. The top-performing CNN model was DenseNet121 with a precision, recall, and F1 score of 0.90. To further improve classification accuracy, we proposed the ViT model (vit base patch16 224) that outperformed all the CNN models by achieving precision of 0.92, recall of 0.91, and F1 score of 0.92. From the experimental outcomes, it is clear that Vision Trans- formers provide better feature representation and generalizability than traditional CNNs for detecting Moringa leaf disease. This research illustrates the ability of trans- former models in agricultural applications and provides a baseline for future studies on smart agriculture and plant disease classification." },
    { title: "A Comprehensive Study on Deep Learning Architectures for Robust Object Identification in UAV-Based Thermal Imaging", authors: "Sadman Sadik Khan*, Mahtab Chowdhury, Md Shahriar Mannan Prottoy, Kazi Zakiul Haque, Al Momit, Tasnuva Arfin Janisa", venue: "IDAA 2025", publisher: "Springer", year: "2025", type: "conference", abstract: "In recent years, various industries have been experiencing a notable increase in the use of machine learning for object recognition, resulting in the development of different methods and technologies. Thermal detection technology is one such aspect that uses thermal images captured from objects to determine them based on their heat signatures. This has been particularly useful in situations like surveillance, search and rescue missions, and nighttime operations where conventional imaging techniques are limited by poor visibility or darkness. The advent of unmanned aerial vehicles (UAVs) has even widened the scope of practical application of thermal imaging. In situations such as monitoring wildfires or carrying out search and rescue operations, UAVs fitted with thermographic cameras can cover large areas within a short time. The combination of UAVs and thermal detection technology has greatly improved thermal data acquisition, expanding its reach into fields such as disaster relief, animal tracking, among others including industry inspections. In this study, we used the HIT-UAV dataset, which has gained much popularity in object identification research, to investigate the efficiency of the latest YOLOv8 model, YOLOv8m, and YOLOv8s, more accurately, by comparing these models to their previous version, YOLOv5 models. Through our implementation of YOLOv8m on the HIT-UAV dataset, we were able to achieve a precision of 87.6% and a mean average score of81.9%, and with YOLOv8s, we were able to achieve a precision of 89.1% andmean average score of 82.3%." },
    { title: "A Comparative Study of Sequential Models and Transformer-Based LLMs for Bangla Suspicious Political Comment Classification", authors: "Rasel Parvez, Md. Ikramul Hossain, Sadman Sadik Khan*, Aminul Haque, Sami Ahmed, Abu Hurairah Rifat", venue: "IDAA 2025", publisher: "Springer", year: "2025", type: "conference", abstract: "The rapid worldwide spread of political discussions in Bangla calls for the automation of the detection of suspicious or harmful content. This paper considers suspicious political comments in Bangla classification with both sequential-based and transformer-based deep learning models. The dataset is the Suspicious Bangla Text Dataset, which consists of 43,389 comments labeled as suspicious or non-suspicious. The dataset has undergone rigorous preprocessing: normalization, tokenization, and sequence padding. The two Recurrent Neural Networks, LSTM and Bi-LSTM, and two transformer models, BanglaBERT and mBERT, were trained with stratified 80-20 splits and tested. Experimentally, the results show that transformer-based models, especially BanglaBERT, performed better than the sequential network by getting 93% overall accuracy, followed by balanced precision, recall, and F1-score for both classes. These recent developments show how they were able to do contextual embedding and fine-tuning in low-resource languages by setting a benchmark framework with which suspicious political content in the Bangla language can be detected for safer online discourse and future NLP research in low-resource languages. " },
    { title: "Fine-Tuned MobileNetV2 for Multi-Fruit Ripeness Classification Using Deep Transfer Learning", authors: "Md Shazedur Rahman, Rofidul Hasan Ovik, Sadman Sadik Khan*, AKM Bahalul Haque, Sudipta Das Gupta, Md Nyem Hasan Bhuiyan", venue: "IDAA 2025", publisher: "Springer", year: "2025", type: "conference", abstract: "Accurate fruit ripeness detection plays a vital role in ensuring food quality, minimizing waste, and supporting automation in agriculture. This research investigates deep learning techniques for classifying the ripeness of three fruits—apples, bananas, and oranges—into fresh, unripe, and rotten categories. Four pre-trained convolutional neural network models—MobileNetV2, InceptionV3, ResNet50, and DenseNet121—were applied to both individual fruit datasets and a combined dataset. All models performed exceptionally well on single-fruit classification, with MobileNetV2 achieving perfect accuracy. When evaluated on the combined dataset, MobileNetV2 maintained strong performance with 97% accuracy, which further improved to 99% after fine-tuning. The fine-tuning process involved freezing the base model, training 75 layers, and adding a global average pooling layer, dropout, early stopping, and a learning rate scheduler. These results demonstrate the effectiveness of a lightweight, fine-tuned CNN model for robust and high-accuracy fruit ripeness classification, making it suitable for real-world deployment." },
    { title: "A Comparative Study of LSTM and Bi-LSTM Architectures with Attention for Bangla News Classification", authors: "Md Shazedur Rahman, Parvaj Kazi, Mir Mynul Ahasan Mim, Sadman Sadik Khan*, Nitta Nando Roy, Md Anisur Rahman", venue: "IDAA 2025", publisher: "Springer", year: "2025", type: "conference", abstract: "News classification is an important task to perform in NLP, more so when dealing with low-resource languages such as Bangla. However, Bangla comes with its own set of challenges like different morphology, complex syntax, and a very acute shortage of large annotated corpora. In this work, Long Short-Term Memory (LSTM), Bidirectional LSTM (Bi-LSTM), LSTM with Attention, and Bi-LSTM with Attention were tested to classify Bangla news articles into four broad categories: sports, national, international, and entertainment. The balanced Kaggle dataset has 11,904 labeled samples. The dataset underwent pre-processing that included normalization, tokenization, padding, and removal of stopwords. Models were trained using the Adam optimizer for twenty epochs on categorical cross-entropy loss. Results showed that Bi-LSTM+Attention set the highest validation accuracy of 96%, out-performing all other models. These results have paved the way for attention-based deep learning models can effectively classify Bangla news domains." },
    { title: "Analysis of Human and AI-Generated Text Classification", authors: "Md. Rony, Jubair Khan Shahos, Adnan Mahmud Fuad, Sadman Sadik Khan*, Asiful Islam, Md Minhajul Islam", venue: "IDAA 2025", publisher: "Springer", year: "2025", type: "conference", abstract: "Artificial Intelligence plays a vital role in generating Text that is used in our daily lives. However, the rapidly increasing usefulness of AI technology is a concern, according to need. This includes biases in the response of the generative AI. There are lots of generative AI that contribute to generating text, documents, articles, etc. However, the generative model is also concerned about the authentication of text. This paper surveys to collect human and AI responses to a question. The same question is set for AI tools to generate responses. This study evaluates and examines the linguistically and semantically important features of human and AI-generated text by using machine learning and deep learning classification. To achieve an optimal performance with the most suitable machine learning model, we also need a neural network model, which is based on deep learning. Then the response of this model classifies the text as human or AI-generated. The human-generated text will be much better than the AI-generated text. In the present digital world, AI captures 70% of information from humans, so it provides text like humans. In this paper, the Contribution of this novel work is the development of a methodology that can identify AI-generated text from human-authored text using different machine learning models. It has become significantly difficult to tell AI-generated text apart from human writing, and the existing detectors are restricted to minor datasets and superficial features. The study introduces a combined ML–DL approach that merges linguistic characteristics with VGG-16 semantic embeddings for the categorization of AI and human text. With the training on 487k samples, the model can reach 0.999 accuracy, thus proving to be very robust and able to generalize well. The findings validate the hybrid feature approach as being effective for the reliable detection of AI-generated texts. " },
    { title: "Pneumonia Detection from Chest X-Ray Using Deep Learning Techniques: A Comparative Study", authors: "Robiul Hasan Anim, Md Rashadul Islam, Istiak Ahmed, Sadman Sadik Khan*, Abdus Sattar", venue: "IDAA 2025", publisher: "Taylor & Francis", year: "2025", type: "conference", abstract: "Pneumonia is still a major health problem globally, especially among susceptible populations like children and the elderly. Early, precise diagnosis is vital for successful treatment and avoiding serious complications. Chest X-rays (CXRs) are widely used to diagnose pneumonia, but manual interpretation takes time and is susceptible to error. This paper presents ”Advances in Medical Imaging,” a deep learning framework that improves pneumonia detection on CXRs with convolutional neural networks (CNNs). Four CNN models, Custom CNN, VGG16, MobileNetV2, and Xception, were experimented on for pneumonia detection performance. The best accuracy (93%) and F1-score (93%) were reported by the Xception model, which demonstrates its ability to learn multi-scale features and accurately detect pneumonia features. MobileNetV2 was similarly accurate (91%) with fewer parameters, presenting an optimal solution for real-time and low-resource situations. VGG16 was also accurate with 91% accuracy and precision, but its computationally expensive nature is less optimal in resource-constrained environments. The Custom CNN model, with an accuracy rate of 62%, did not generalize sufficiently, mirroring the need for architectural improvements. The results underscore the potential of deep learning to revolutionize medical diagnostics with accurate, efficient, and scalable detection of pneumonia, particularly in underserved populations." },
    { title: "From Classical to Colloquial: Leveraging LLMs for Sadhu–Cholit Register Identification in Bangla", authors: "Rasel Parvez, Md Anwar Hossain, Showrov Azam, Sadman Sadik Khan*, Sadekur Rahman", venue: "IDAA 2025", publisher: "Springer", year: "2025", type: "conference", abstract: "Posing as a diglossic and morphologically rich language, Bangla contains two major types of registers: Sadhu Bhasha, the classical type, and Cholit Bhasha, the colloquial. Identification of the registers can be beneficial for downstream applications involving NLP, such as translation, OCR, and speech synthesis. The study involved developing a dataset balanced with 7350 Sadhu and Cholit sentences. The dataset was preprocessed by tokenization, normalization, and padding, then split 80–20 for training and testing. Four deep learning models, viz. LSTM, Bi-LSTM, BanglaBERT, and mBERT were trained in identical settings, using Adam optimizers with a batch size of 32 for 10 epochs. Experimental results suggested that while sequential models did perform reasonably well, transformer models outperformed them substantially, with BanglaBERT attaining the highest accuracy of 95%. These results become the benchmark for Sadhu-Cholit classification and stress the importance of register sensitivity in the Bangla NLP." },
    { title: "CancerGuard: A Deep Learning Approach to Lung Cancer Detection", authors: "Md Shazedur Rahman, Md Shahriar Mannan Prottoy, Mahtab Chowdhury, Tasbih Tahlil Nidhi, Azim Ullah Tamim, Sadman Sadik Khan*", venue: "IDAA 2025", publisher: "Springer", year: "2025", type: "conference", abstract: "Lung cancer remains the leading cause of cancer-related mortality around the world, requiring headways in early discovery methods to progress in understanding results. This study explores the efficacy of deep learning models, particularly InceptionV3, VGG16, and MobileNetV2, within the detection and classification of lung cancer through histopathology images. Utilizing a dataset comprising various lung cancer subtypes, these models were trained and validated, demonstrating amazing diagnostic accuracy. The results highlight the potential of deep learning to enhance lung cancer diagnostics significantly, outperforming conventional diagnostic strategies in both speed and precision. This paper discusses the models' performance metrics, including precision, recall, F1score, and overall accuracy, which substantiate the robustness and reliability of deep learning in medical imaging. The dataset was open source, which contains 15000 images, and the accuracy of the proposed model is 99%. The findings advocate for the integration of deep learning technologies in clinical settings to encourage early and exact lung cancer location, subsequently possibly expanding survival rates. " },
    { title: "BiLSTM-Based Smishing Detection for Bangla SMS", authors: "Anmay Paul Arpan, Rajoshree Ghatak, Md. Mahmudul Hasan, Anuj Roy, Md Azijul Haque, Sadman Sadik Khan*", venue: "IDAA 2025", publisher: "Springer", year: "2025", type: "conference", abstract: "A morphologically sophisticated and diglossic Bangla is a difficult language for Natural Language Processing (NLP), particularly for security tools such as smishing (SMS-based phishing) detection. This paper proposes a Bidirectional Long Short-Term Memory (BiLSTM)-based model to identify Bangla SMS as normal, promotional, or smishing based on an evenly divided dataset of 2,772 messages. After preprocessing with tokenization, normalization, and padding, the model was trained with the Adam optimizer, class-weighted loss, and early stopping. Based on experimental outcomes, the BiLSTM achieved an overall accuracy of 95%, and the F1-score averaged at 0.95. While normal and promotional SMS were put into the good performance class (F1 = 0.95 and 0.98, respectively), smishing messages attained a precision of 0.98 but a recall of 0.89, which was lower due to misclassifications to the normal class. ROC analysis also confirmed strength with 1.00 AUC readings for normal and promotional, and 0.99 for smishing, establishing the benchmark of Bangla smishing detection and indicating the need for advanced techniques to reduce false negatives even further." },
    { title: "Deep Learning in Agricultural Health: Evaluating Model Performance for Plant Disease Detection", authors: "Sadman Sadik Khan*, Morsalin Sarker Siam, Shah Md Mafidur Hasan, Sayed Hasan Emon, Rasel Parvez, Md. Golam Morshed Tuhin", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "The early and accurate detection of plant diseases is critical for ensuring agricultural productivity and food security. This paper presents a novel deep learning-based framework for the identification of diseases in paddy leaves, leveraging the power of Convolutional Neural Networks (CNNs) to analyze a comprehensive dataset comprising 124,625 high-resolution images across 37 distinct disease classes. The proposed system aims to overcome the limitations of traditional disease detection methods, which are often labor-intensive and prone to human error. Our methodology includes meticulous data collection from diverse agricultural fields, extensive preprocessing to enhance image quality, and the application of state-of-the-art CNN architectures-MobileNetV2, InceptionV3, a custom-designed CNN, and VGG16. Among these, VGG16 achieved the highest accuracy of 0.93, demonstrating superior performance in classifying a wide range of paddy leaf diseases. The results highlight the effectiveness of the proposed framework, offering a robust tool that can be integrated into mobile applications for real-time use by farmers. This system has the potential to significantly reduce crop losses, improve yield quality, and contribute to the sustainability of global food supplies. The work represents a step forward in applying artificial intelligence to agricultural challenges, providing a scalable solution to enhance disease management in crops." },
    { title: "Deep Neural Networks for Identifying Leaf Diseases in Potato and Eggplant Crops", authors: "Sadman Sadik Khan*, Md. Mahfujur Rahman, Nasif Abdullah, S.M. Sajjad Hossain Jim, Ahmed As-Sami Nafis, Fariha Rahman Aisharjo", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "Agricultural productivity is crucial for global food security, yet it is frequently threatened by plant diseases, particularly in staple crops like potato and eggplant. Traditional methods for disease detection are often labor-intensive and error-prone, necessitating advancements in automated solutions. This study explores the application of deep learning, specifically convolutional neural networks (CNNs), to enhance the detection and diagnosis of leaf diseases in potato and eggplant crops. Utilizing a comprehensive dataset of 4,252 high-resolution leaf images affected by various diseases, five prominent deep learning models were trained and evaluated five prominent deep learning models: VGG16, VGG19, MobileNetV2, ResNet50, and InceptionV3. Our methodology included rigorous data preprocessing, augmentation, and fine-tuning of pre-trained models to optimize accuracy and generalizability. The results demonstrate that these models can achieve high levels of precision and recall, with MobileNetV2 notably providing optimal performance in terms of efficiency and resource usage suitable for real-time applications. MobileNetV2 performs outstanding in our custom-made dataset with an accuracy of 94%. This study confirms the potential of deep learning technologies to revolutionize plant disease diagnosis, significantly reducing labor costs and improving the timely management of crop diseases, thus supporting sustainable agricultural practices and enhancing crop yields." },
    { title: "Deep CNNs for Olive Leaf Disease Classification: A Performance Study", authors: "Md. Iftekhar Rahman Likhan, Sayone Dey, Sadman Sadik Khan*, Fariha Rahman Aisharjo, Md. Mahfujur Rahman, Ahmed As-Sami Nafis", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "Recognizing diseases that impact the leaves is crucial to maintaining the health and productivity of olive groves. Traditional diagnostic methods are labor-intensive and time-consuming, so automated alternatives are being researched. By using deep learning techniques to classify olive leaf diseases, this work seeks to increase diagnostic efficiency and accuracy. 3,400 images from Kaggle that depicted various illness types were chosen. The images were preprocessed using methods like noise reduction, normalization, and scaling to 448×448 pixels in order to prepare them for model training. Four convolutional neural network (CNN) architectures were evaluated for their ability to categorize diseases: MobileNetV2, DenseNet121, InceptionV3, and Xception. DenseNet121 performed better than the others with training accuracy of 99.63%, validation accuracy of 97.58%, and validation loss of 0.0869. InceptionV3 ranked second with a validation accuracy of 97.27% and a validation loss of 0.0820. The respective validation accuracies for Xception and MobileNetV2 were 95.76% and 97.27%. These results suggest that DenseNet121 is the most effective model for identifying olive leaf disease due to its high accuracy and generalization ability. The findings demonstrate the potential for deep learning models to automate plant disease diagnosis, setting the stage for future research and applications in precision agriculture." },
    { title: "Word Embedding for SMS Spam Detection Using Deep Learning Models", authors: "Md. Farush Uddin, Md. Mohin Khan, Sadman Sadik Khan*", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "Email and SMS remain crucial communication tools for business operations as well as academic and organizational functions. The daily influx of messages forces users to process both meaningful information (ham) and unwanted content (spam). Spam is unwanted mass digital correspondence that both congests network bandwidth and wastes storage space. The creation of effective spam detection systems that maintain high accuracy levels is essential to solve this issue. Natural Language Processing tasks frequently utilize word embedding approaches such as Bag of Words (BOW), N-grams, TF-IDF, Word2Vec, and Doc2Vec but comparative studies evaluating their effectiveness for SMS spam detection tasks are scarce. The research performs an exhaustive analysis of various embedding techniques through a publicly accessible SMS dataset that includes both spam and ham messages. The evaluation is performed with five machine learning classifiers: The study's evaluation utilized five machine learning classifiers including Multinomial Naive Bayes (MNB), K-Nearest Neighbors (KNN), Support Vector Machine (SVM), Random Forest, and Extra Trees. The combination of N-grams, BOW, and TF-IDF with oversampling produces improved outcomes with F1-scores reaching 0.99 for ham and 0.94 for spam." },
    { title: "Detecting Emotions Using Transformer-Based Models in Transliterated Bangla (Banglish) Text", authors: "Kazi Meherunnesa Eva, Fardin Ahmed Alvi, Sadman Sadik Khan*, Mahir Al Imran Sagor, Kazi Meherunnesa Dola, Md Shaharier Jahangir", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "Emotion detection has become a common challenge since the arrival of emotion detection systems and advancements in the field of NLP where machine learning and deep learning have made it easier to analyze emotions, especially in low-resource languages like Bengali and Banglish. Leveraging a recently announced 'Bengali & Banglish' dataset, comprising 80,098 labeled samples from six widely used emotion classes, this work benchmarks the fine-grained emotion classification performance of transformer-based models. The dataset has three Bengali textual modalities-native Bengali script, Romanized Banglish and translated English. The analysis is limited to mBERT, XLM-RoBERTa, BanglaBERT, and BanglishBERT, which are state-of-the-art multilingual and language-specific transformer architectures, to study how effectively they analyze emotions. Based on the experimental results of Banglish texts, the highest weighted F1-score of 65.54% is gained using XLM-RoBERTa in Banglish, underscoring the challenges posed by low-resource and transliterated language for emotion classification. The models exhibit varied performance across language modalities and emotion classes, reflecting the nuanced linguistic and syntactic features inherent to each variant. This study underscores the need for continued advancement in multilingual transformer architectures and dataset enrichment to improve emotion detection in underrepresented languages. The findings of this paper contribute to a comparative evaluation and establish a foundational benchmark for future research in this space." },
    { title: "Enhancing Malware Detection in Android Applications Using Machine Learning Models", authors: "Nafia Islam Naina, Khondoker Sabit Uz Zaman, S.M. Rafid Ul Amin, Sadman Sadik Khan*", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "The rapid increase in Android malware presents growing threats to mobile security, privacy and financial systems globally, demanding advanced detection solutions. This research proposes a new enhanced method for identifying malware in Android applications by using machine learning models. This key contribution of this research lies in addressing significant drawbacks in existing methods, such as being reliant on static analysis and limited detection efficiency, a comparative analysis of various machine learning models to determine the most effective technique and model optimization through feature selection to improve accuracy and efficiency. A comprehensive dataset including both benign and malicious samples, is analyzed to extract key features. After initial preprocessing including data cleaning, outlier removing, label encoding, random oversampling, feature scaling and feature selection, the dataset was prepared to be trained. From the whole dataset, 80% was employed to train the model and 20% was employed to test. Random Forest, KNN, Extra Trees, Decision Tree, Logistic Regression and XGBoost models were used in this study due to their complementary strengths in addressing critical challenges associated with Android malware detection. The models were tested and fine-tuned using hyperparameter optimization to enhance performance. The final observation shows that out of all these models, the XGBoost outperformed with 99% accuracy. Afterwards, the proposed model's performance was compared with other models that have been published recently. It was discovered that the proposed model performed better than all other models in terms of accuracy. The findings of this study may offer a reliable and effective way for detecting malware in Android applications." },
    { title: "Gender Classification from Bengali Text Using Deep Learning Techniques", authors: "Mahmudul Hasan Nayem, Md. Masfiqur Rahman Nehal, Munawar Mesbah Shraban, Md Abdullah Al Maruf, Sadman Sadik Khan*, Sheak Rashed Haider Noori", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "With the significant expansion of the demand for intelligent systems capable of understanding linguistic patterns and social characteristics in recent years. Natural language processing (NLP) employs artificial intelligence (AI) to analyze and read data in a form that machines can understand regardless of the language being written or spoken. In this paper, we propose a method to derive gender classification of Bangla texts utilizing a raw dataset of written texts from a variety of authors. The approach involves Data Collection, Preprocessing, Model Selection, Training, and Evolution. The dataset is pre-processed with the help of lemmatization, tokenization, and padding. Deep learning models, including LSTM and Bi-LSTM, were selected based on their capacity to identify trends based on the language. The best accuracy of 97% was achieved with the BiLSTM model, outperforming all other methods. Using the Adam optimizer with a learning rate of 1e-4, the model was compiled. Accuracy, precision, recall, F1 score, confusion matrix, and classification report are used to compare the training and testing sets in order to assess performance. We contribute a new dataset in a low-resource language and also demonstrate how writing style may contain subtle signals of gender." },
    { title: "Tomato Maturity Detection and Quality Grading System Using Deep Learning", authors: "Md. Hasan Siddik Mahin, Md Rashadul Islam, Robiul Hasan Anim, Sadman Sadik Khan*", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "This study proposes an automated system for tomato ripeness evaluation and quality inspection using deep learning approaches. Results indicate that a customized architecture of Convolutional Neural Networks (CNN), coupled with various pre-trained models, accurately classifies tomatoes into four categories: Damaged, Old, Ripe, and Unripe with impressive levels of accuracy. Ensemble methodology showed an impressive validation accuracy of 99.46% with 100% perfect classification for all instances of Unripe tomatoes and near-perfect classification rates of over 98% for all other types. The approach presented in this study holds great applicability to agricultural sorting systems to decrease food wastage and improve quality checks in tomato supply chains. Empirical evidence supports our proposed solution's better performance compared to individual models, providing a robust means for automating tomato quality inspection." },
    { title: "Exploring the Best Machine Learning Model for Alzheimer's Disease Prediction", authors: "Shahin, Md. Mahfujur Rahman, S.M. Sajjad Hossain Jim, Sadman Sadik Khan*", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "Alzheimer Disease (AD) is a degenerative neurolog ical disorder negatively compromises cognitivity function and quality of life. Previous & true predict of Alzheimers critical as appropriate mediations and treatment. Here this study, in vestigate and assess performances several ML models determine effective method as Alzheimer's Disease prediction using patient clinical data. Initially, traditional models as Support Vactor Ma chine [SVM], Logistic Ragression [LR], and KNearest Neighbor [KNN] were utilized, generating baseline accuracies of 83%, 83%, and 72% respectively. After performing hyperparameter modification, the accuracies rose slightly to 84% for both SVM and LR, and 73% for KNN. To make our predictions even better, we tried out a few different ensemble methods. After tweaking things a bit, we found XGBoost, CatBoost both got highest accuracy at 96%, LightGBM close behind at 95%, and Random Forest at 94%. These findings prove that using gradient boosting techniques can really amp up our ability to handle complex medical data.This comparative study stresses the potential of specialized algorithms for ensemble learning like XGBoost and CatBoost as key tools for previous identification of Alzheimers Disease. The work provides basis for creating successful, data driven diagnostic aid systems in healthcare facilities." },
    { title: "Sentiment Analysis of YouTube Comments: A Comprehensive Study of Machine Learning Models", authors: "Most. Jannatul Firdousi Zoti, Maruf Rahman, Syed Shafin Ahmed, Sadman Sadik Khan*", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "YouTube is one of the most popular video sharing platforms for global cult. Through this, users often share their thoughts, feedback, and opinions in the comment section. However, popular videos and channels receive a massive number of comments, making it difficult to analyze user sentiment quickly and effectively. For this purpose, we proposed a machine learning approach for sentiment analysis of YouTube video comments and replies, aiming to classify viewer opinions as positive, negative, and neutral based on content. A labeled dataset of 18408 English comments was used for training and testing, which was preprocessed by removing unnecessary words, fixing the text, and simplifying the words using stopword removal, lemmatization, and addressing class imbalance with SMOTE. The performance of seven machine learning algorithms-Logistic Regression, Random Forest, Decision Tree, Naïve Bayes, Support Vector Machine (SVM), XGBoost, and LightGBM-was evaluated. Among these models, Random Forest achieved the best results with an accuracy of 88.31%, with strong scores in precision, recall, and f1-score across all positive, negative, and neutral sentiment categories. While other models, like SVM, Logistic Regression, and Decision Tree, achieved 82.03%, 81.15%, and 80.46%, respectively. This study offers valuable insights for content creators to improve their videos and better engage with their audience by analyzing users' sentiment." },
    { title: "Fine-Grained B-Cell Leukemia Classification Using Attention-Augmented VGG16 on Microscopic Blood Images", authors: "Mahmud Kabir Yousuf, Pronoy Kumar Mondal, Ahmed Saif Muntaseer, Khadiza Islam Shuchona, Sadman Sadik Khan*, Md. Sadekur Rahman", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "Precise identification of B-cell blood cancers, especially Acute Lymphoblastic Leukemia (ALL) subtypes, still constitutes a major problem in hematologic diagnostics, due to mimicking morphological characteristics. In this paper, we propose a deep learning model for fine-grained classification of four B-cell types Benign, Malignant Pre-B, Pro-B and Early Pre-B from peripheral blood smear (PBS) images. Based on a public dataset consisting of 3,242 labeled images, we proposed and evaluated the performance of two convolutional neural network architectures: a base-line VGG16 model and an improved hybrid model embedding multi-head attention mechanism and regularization methods. The similar ripeness dataset (balanced) was applied, which was subjected to RandomOverSampler and standardized preprocessing, including label encoding, normalization, stratified train-test split. The baseline model performed with a general accuracy of 91%, but the hybrid model outperformed the baseline by obtaining 98% accuracy with better class-wise precision and misclassification was relatively low especially for the Benign class. Performance measurements, training details, and confusion matrices confirm the success of attention-based mechanisms in dealing with visually similar subtypes. This study emphasizes the promise of interpretable and scalable AI-guided solutions for early diagnosis and subtype discrimination of hematological malignancies, enabling smarter and more personalized therapeutic approaches." },
    { title: "A Voting Ensemble Approach for Detecting Phishing Websites Using Machine Learning", authors: "Aminur Sarker, Maksudul Hasan Khoka, Arafat Rahman, Sadman Sadik Khan*", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "Phishing is an emerging cybersecurity threat that recursively recreates legitimate websites to fraudulently gather personal data. As rule-based methods tend to fail against evolving threats, adaptive machine learning approaches are needed for effective detection. In this work, we propose an approach based on ML to classify websites as phishing or legitimate by using a dataset with different URL and content-based features as well as domain-based features. After collecting datasets from kaggle (11,430 samples and 89 features) a highly rigorous preprocessing step is performed that includes dropping missing value and duplicate values, removal of outliers and the elimination of low-variance features, as well as correlation based feature selection. The classification data is analyzed to find redundant and imbal-anced features. Therefore, an optimal feature set (11,430 , 64) for classification is generated from the collected features. Then, various supervised learning algorithms (RF, DT, SVM, LR, KNN, XGBoost, LightGBM, Naive Bayes, Voting classifier) are used to test their performance in detecting phishing. Performance metrics such as precision, recall, accuracy, F1-score and geometric mean, AUC ROC score are used to evaluate the model effectiveness. The performance of the ensemble model was optimal with a 97.51% accuracy rate, geometric mean score of 97.50, and AUC of 97.50, performing better than the classifiers. In experiments, intelligent phishing detection systems can be very accurate, compared with traditional methods, and also provide a scalable, adaptive cybersecurity solution." },
    { title: "XAI for Multiclass Lung Cancer Classification in CT Scans Using Grad-CAM via Transfer Learning", authors: "Fardus Alam, Md. Tanim Hasan, Mihad Habib, Sadman Sadik Khan*", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "Early detection of lung cancer stands as a vital factor to improve patient survival statistics between 18% and 56% globally because this condition remains the primary cancer-related cause of death worldwide. The research develops an Explainable Artificial Intelligence (XAI) system to perform multiclass lung cancer diagnosis in CT scans using transfer learning with Gradient-weighted Class Activation Mapping (Grad-CAM). Our research utilized the 3450 CT images from Kaggle which were spread evenly across the six classes (Adenocarcinoma, Benign, Large Cell Carcinoma, Malignant, Normal, Squamous Cell Carcinoma) to achieve a test accuracy of 99.13% and validation accuracy of 99.28% when we applied MobileNetV2. MobileNetV2 achieved better feature extraction after ImageNet pre-training for this application thus surpassing VGG16 (94.20%) and Xception (72.61%). Grad-CAM generates visual heatmaps to guide users into understanding how the detection process works while the highlighted areas track closely to radiologist marked regions which build trust between the model and doctors. The diagnostic algorithm provides accurate results for lung cancer subtypes and reveals operational processes to enable better medical diagnosis using Explainable AI which drives improved patient outcomes in precise imaging applications." },
    { title: "Automated Detection of Colorectal Polyps Using Deep Learning Techniques", authors: "Songit Roy, Nagib Mahfuj, Anika Afrin Moumeta, Sadman Sadik Khan*", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "Colorectal cancer (CRC) is still the most common cause of cancer deaths worldwide, and colon polyps that are not yet detected are the primary cause of diagnosis delay. Early detection of polyps has the ability to significantly lower the risk of development of colorectal cancer. In this current research, we introduce computer-aided detection of colon polyps through deep learning methods with four Convolutional Neural Network (CNN) models namely Xception, MobileNetv2, ResNet152v2, and VGG19. The models were trained on colonoscopy images, and the experiments showed good performance metrics on all of them. The models recorded a 100% precision, recall, and an F1-score in the majority of cases, with Xception recording a lower accurate recollect at 86% on ground truth images but a perfect 100% on F1-score. MobileNetv2, ResNet152v2, and VGG19 were, for original images and ground truth too, 100% accurate, recollectful, as well as F1-score. The experiments also indicated great values of support, with MobileNetv2 as well as VGG19 models having a support value of 2180 as well as 2172, respectively. The precision as well as F1-score of 100% with support values of 2175 as well as 2177 respectively was achieved by the Xception model. The ResNet152v2 model also exhibited perfect performance with values of support as 2171 as well as 2181. These observations confirm that the deep learning CNN-based models excel over current methods, as they provide accurate, dependable, as well as scalable solutions to the real-time detection of polyps on colonoscopy images." },
    { title: "Competitive Sentiment Analysis Using Character-Level CNNs with Limited Data", authors: "Md. Toha Siddique, Zahidul Islam Rabbi, Md. Fahim Muntasir Mozumder, Sadman Sadik Khan*", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "Character-level convolutional neural networks (CNNs) have demonstrated strong performance in text classification tasks, notably achieving 95.07% accuracy on the Yelp Polarity dataset with 598,000 samples according to prior work. This study explores the potential of such models under constrained data conditions, utilizing only 76,076 samples-approximately one-eighth of the benchmark dataset. We enhance the baseline Large ConvNet by increasing the embedding dimension to 128 and adopting the Adam optimizer with regularization techniques, including dropout (0.5) and weight decay (10⁻⁵). Training on 60,860 samples, a single model achieves 91.08% test accuracy. To further improve performance, we ensemble three models with distinct initializations, yielding 91.12% accuracy on 15,216 test samples. Unlike prior efforts that leveraged thesaurus-based augmentation, our approach relies solely on architectural and training optimizations. Comparative results, detailed in tables, highlight that while we fall short of the 95.07% benchmark, our accuracy with significantly less data underscores the adaptability of character-level CNNs. This work provides a practical framework for sentiment analysis in data-scarce scenarios, with performance metrics and visual comparisons illustrating the trade-offs and gains." },
    { title: "Deep Learning-Based Indoor Plant Variant Detection", authors: "Shrabon Datta, Mahir Al Imran Sagor, Md Shaharier Jahangir, Sadman Sadik Khan*", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "Indoor plants play a crucial role in enhancing air quality and aesthetics, but their accurate categorization is difficult in automatic systems due to the various characteristics and similarities of plant species. This study investigates the categorization of five various classes of indoor plants: Yellow Corn, Yellow Kewda Plants, Pink Prayer Plants, Yellow Monstera Plant, and Butterfly Lily Plants. A data set consisting of 1354 samples was employed, and various sample sizes in each class existed. The proposed method relies on the power of two hybrid Convolutional Neural Networks (CNNs) and three best transfer learning models, namely VGG19, DenseNet201, and InceptionResNetV2.Experimental evaluations achieved remarkable classification accuracies, with the models' achieving accuracies of 91%, 99%, 99%, 98%, and 99% in respective plant categories. These results demonstrate the efficiency of hybrid and transfer learning models in providing high accuracy for indoor plant classification tasks. The results of this study present a solid foundation for expanding intelligent plant classification systems, which has the potential for application in indoor gardening, agriculture, and environmental monitoring." },
    { title: "AI for Detecting Early Signs of Diabetic Retinopathy from Retina Scans", authors: "Animesh Dey, Amir Hamja Tamjid, Naim-Ul Hossain Anik, Sadman Sadik Khan*", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "Diabetic Retinopathy (DR) is a progressive retinal disease and a major worldwide cause of avoidable blindness. Early detection is crucial but impeded by faint retinal lesions, data imbalance, and single-modality imaging dependency. This paper introduces an AI-driven framework based on deep learning to automate early DR detection from fundus images. The proposed model integrates transfer learning with ResNet50 and a custom CNN, which is trained on 35,126 labeled images of the EyePACS dataset. The pipeline consisted of class balancing using weighted loss, image augmentation, and normalization. The overall accuracy is shown to be 76.3%, precision 92% for Normal and as high as 80% for subsequent stages. Mild and moderate DR detection remains problematic (62% and 58% accuracy), which demonstrates the utility of multimodal inputs such as OCT. The conclusion involves an improvement roadmap through high-resolution imaging and deployment in low-resource clinical environments." },
    { title: "Sentiment Analysis for Proactive Psychological Well-Being", authors: "Md Jahidul Islam Mozumdar, Md Muhasin Ali, Rifat Bin Saleh Aywon, Sadman Sadik Khan*", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "With the prevalence of mental health challenges in an era, early detection of psychic distress was never so crucial. The approach presented in this research is a sentiment analysis approach that aims to proactively help in the promotion of psychological well being by analyzing social media text data. Using the robust opinion dataset, we used multiple Machine Learning models like Gradient Boosting model, XG boosting model, Linear Support vector classifier (LinearSVC), AdaBoost, Random Forest and Bernoulli Naive Bayes classifying sentiments of positive or negative. Preprocessing of the dataset involved the cleaning, vectorization and feature scaling to make the model perform better. All the models were evaluated and ranked on the basis of level of accuracy they achieved and our best model was 76% accurate. This provides evidence supporting the use of sentiment analysis in mental health monitoring, and outlines problems associated with determination of emotional expressions in text. The study opens the path to the development of a new generation of AI supported mental health systems based on maximised data diversity and refined algorithms." },
    { title: "TeaGuard-AI: Automated Tea Leaf Disease Classification Using Deep Learning and Image Processing", authors: "Md. Fahad, Touhid Mahmud, Md. Mehadi Hasan Rabby, Sadman Sadik Khan*", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "Tea leaf diseases pose a significant threat to global tea production, impacting yield and quality. Traditional manual inspection methods for disease detection are labor-intensive, subjective, and impractical for large-scale estates, necessitating automated, accurate alternatives. The research applies artificial intelligence (AI) alongside image processing approaches to build a highly efficient disease spot detection system through the TeaLeafBD dataset (which incorporates 5276 RGB images of seven disease categories including Tea Algal Leaf Spot, Brown Blight, Gray Blight, Helopeltis, Red Spider, Green Mirid Bug, and Healthy Leaf). A total of five convolutional neural network (CNN) models-EfficientNetV2B3, VGG16, VGG19, MobileNetV2 and InceptionV3 applied ImageNet pretrained weights to process 4221 training images for evaluation on 1055 validation samples (528-sample subset for baselines). The performance evaluation included precision, recall, F1-score, accuracy measurements alongside Area Under the Curve (AUC) scores. The EfficientNetV2B3 model showed superior performance by reaching 92.42% validation accuracy and 0.90 macro F1-score together with AUC scores above 0.98 in each class through the combination of data augmentation and class weighting mechanisms. MobileNetV2 achieved 77% but InceptionV3 reached 72% and VGG16 and VGG19 reported 52% and 47% respectively on the subset which showed EfficientNetV2B3's better generalization skills. These findings demonstrate AI-driven systems' potential to enable early, scalable disease detection, reducing crop losses and enhancing tea production efficiency. The research enables sustainable agriculture through an effective deployable system for tea disease monitoring which opens possibilities for both real-time inspections and mobile solutions." },
    { title: "Asthma Prediction Using Machine Learning: A Comprehensive Data Analysis Report", authors: "Md Shahidul Islam, Md Shakil Parvez, Faisal Abedin Rahat, Sadman Sadik Khan*", venue: "16th ICCCNT 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "The symptoms of asthma, a long-term inflammatory respiratory condition, include coughing, chest tightness, wheezing , and shortness of breath. With both personal and financial costs, it poses a serious public health burden to more than 300 million people worldwide. To improve patients' quality of life and avoid complications, early diagnosis and efficient management are crucial, particularly for populations with limited access to healthcare. As artificial intelligence (AI) advances and structured health data becomes more accessible, machine learning (ML) offers a promising way to improve and automate the diagnosis of asthma. In this work, we present an end-to-end machine learning pipeline to predict the presence of asthma based on patient-level characteristics. The pipeline comprises data collection, pre-processing, cleaning, exploratory data analysis (EDA), model training, and validation. We use common classification metrics to assess various supervised learning algorithms, such as ensemble models, logistic regression, and decision trees. While visualization techniques are used to find patterns and relationships in the data, statistical methods ensure the reliability and precision of model construction. Results show how machine learning could be used as a clinical decision-support tool, opening the door for future data-driven, real-time healthcare solutions." },
    { title: "Mitigating the Spread of Misinformation: A Comparative Analysis of Deep Learning Architectures for Fake News Detection", authors: "Md Abdul Rabbi Rahat*, Mehedi Hasan Salman, Ashab Rahman, James Amin, Sadman Sadik Khan", venue: "ICCTDC 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "In the current age of digital technology, social media now represents the main news source choice for consumers. This practical approach makes false information spread wider. As social media developed with media-rich platforms people shifted from reading fake news in single-text formats to consuming it among multiple media components. Considering that digital media have lots of advantages in the news industry and the Absence of protocols for control and verification, the spread of false news is among the greatest challenges to the economy, democracy, media, freedom of speech, and health. Thus, finding and utilizing efficient automated techniques for the detection of fake information on social media has turned out to be a major task. However, this topic has huge obstacles, the major one being a lack of resources, such as evaluation tools, computer power, and access to large datasets. The approaches currently under investigation by researchers to solutions to these problems are numerous. In this respect, we proposed a comparative analysis of deep learning architectures for identifying false information. We used transformer-based models BERT along with other traditional machine learning models. With an accuracy of 99.26% in detecting fake news, experimental results on actual datasets show that the suggested strategy, in particular, BERT, works better than previous approaches." },
    { title: "Deep Learning Approaches for Scene Classification in Remote Sensing Imagery", authors: "Mehedi Hasan Salman*, Md Abdul Rabbi Rahat, Ashab Rahman, Sadman Sadik Khan", venue: "Multi-Strategy Learning Env. 2025", publisher: "Springer", year: "2025", type: "conference", abstract: "Remote sensing imagery is the key in fields such as environmental monitoring, urban planning and disaster management. Deep learning methods have transformed image classification in remote sensing, hence, the accuracy and automation have been greatly enhanced. The main goal of this paper is to give an overview of the most important developments in the field, highlighting the methods such as auto-encoders, convolutional neural networks (CNN), generative adversarial networks (GAN) and the hybrid methods that come up with the combination of CNN and Transformers. Scene classification tasks are the focus of this work, particularly the use of efficient deep learning techniques and EfficientNetB0, which performed exceptionally. Among other models, EfficientNetB0 achieved an amazing accuracy of 99.50 on this task, overcoming the complexity of remote sensing imagery. Despite these successes, there are nonetheless challenges, including the tuning of hyperparameters, computational expense, and sensitivity to adversarial examples. For instance, the use of approaches, e.g., cross-domain transfer learning and task-specific application-specific models will be necessary to address the problem of data scarcity and task-specific requirements. Remaining 'computational' are future research efforts to overcome computational limitations in lieu of outperforming current models, improve model robustness with respect to object shape, texture, and composition, and to better provide interpretability, all of which are crucial steps in fully utilizing deep learning for classification." },
    { title: "Advancing Bangla NLP: Transformer-Based Question Generation Using Fine-Tuned LLMs", authors: "Washik Wali Faieaz, Sayma Jannat, Pronoy Kumar Mondal*, Sadman Sadik Khan", venue: "ECCE 2025", publisher: "IEEE", year: "2025", type: "conference", abstract: "This research explores the development of a question generation model for Bangla text using the Bangla T5base model, a transformer-based architecture tailored for the language. The study addresses the underrepresentation of Bangla in natural language processing (NLP) by leveraging a carefully curated dataset of Bangla paragraphs and corresponding questions. The Bangla T5 model, pre-trained on a large Bangla corpus, is fine-tuned to generate contextually relevant and coherent questions from input paragraphs. The model’s performance is evaluated using standard metrics such as Exact Match (EM) and ROUGE, achieving a 28.65% ExactMatch score. The ROUGE scores demonstrate strong alignment with the reference questions, with ROUGE-1 F1 at 73.64%, ROUGE-2 F1 at 57.86%, and ROUGE-L F1 at 70.77%. These results highlight the model’s ability to capture the linguistic nuances of Bangla and generate questions that are semantically and syntactically accurate. This work contributes to the advancement of Bangla NLP and underscores the potential for extending similar methodologies to other low-resource languages, promoting inclusivity and linguistic diversity in AI systems." },
    { title: "DeepInsureAI: A Deep Learning-Based Vehicle Insurance Prediction Model", authors: "Sadman Sadik Khan*, Md Shazedur Rahman, Afraz Ul Haque Rupak, Md Sadekur Rahman", venue: "ICEEE 2024", publisher: "Springer", year: "2024", type: "conference", abstract: "Emergence of deep learning has significantly improved the performances of machine learning models, and various pre-trained models have made life easy for organizations that intended to accomplish their task with the help of deep learning-based systems. The aim of this research is to conduct a comparative study of a few popular pre-trained deep learning models based on a primary dataset. The key contribution of this work lies in creating the dataset and conducting the comparative analysis of the pre-trained models. Raw data were initially collected from various accident spots and from workshops where people usually go to repair their damaged vehicles. Later, these datasets were validated by a popular insurance company of the country. VGG16, CGG19, ResNet50, InceptionV3, and MobileNet are the pre-trained models used in this study for their well-accepted performances in the computer vision-based problems. After initial preprocessing which includes removing bad images, resizing, and rescaling, the dataset was prepared for the training. Eighty percent of the dataset was used for training the model and 10% each for testing and validation. After testing the models, a few fine-tuning was done to enhance the performances of the models. Final observation reveals that, out of the five models, InceptionV3 outperformed all other models with an accuracy of 97%. Finally, the performance of the proposed model was compared with other recently published models and the proposed model has outperformed those also. Outcome of the research can provide a more dependable and efficient method for handling automobile insurance claims after accidents." },
    { title: "Advances in Medical Imaging: Deep Learning Strategies for Pneumonia Identification in Chest X-Rays", authors: "Sadman Sadik Khan*, Afraz Ul Haque Rupak, Washik Wali Faieaz, Sayma Jannat, Nuzhat Noor Islam Prova, Amit Kumar Gupta", venue: "15th ICCCNT 2024", publisher: "IEEE", year: "2024", type: "conference", abstract: "Pneumonia poses a widespread international fitness mission, in particular affecting prone populationswhich include youngsters and the elderly. Rapid and accurate analysis is crucial for powerful remedy and the prevention of severe outcomes. Chest X-rays (CXRs) are a fundamental diagnostic tool for pneumonia; however, decoding them may be time-consuming and prone to variability. This paper introduces 'Advances in Medical Imaging,' a unique deep mastering gadget designed to enhance pneumonia detection from CXRs using convolutional neural networks (CNNs). Our device leverages state-of-the-art deep mastering fashions to investigate CXR pictures, considerably improving the accuracy and efficiency of pneumonia identification. In this version, the highest accuracy became 97% whichchanged into achieved by using MobileNetV2. Through significant assessment, our technique has confirmed superior performance over traditional methods, supplying excessive accuracy, speed, and reliability. The 'Advances in Medical Imaging' system no longer mosteffective aids radiologists in diagnosing pneumoniagreater efficaciously but additionally holds the capacity to alleviate the workload in healthcare settings, in particular in underserved regions. This work underscores the transformative impact of AI in medical diagnostics, paving the way for broader applications in healthcare. (PDF) Advances in Medical Imaging: Deep Learning Strategies for Pneumonia Identification in Chest X-rays. " },
    { title: "Performance Analysis of LSTM and Bi-LSTM Models with Different Optimizers in Bangla Sentiment Analysis", authors: "Sadman Sadik Khan*, Pronoy Kumar Mondal, Sm Shaqib, Nayeem Ahmed, Nuzhat Noor Islam Prova, Abdus Sattar", venue: "15th ICCCNT 2024", publisher: "IEEE", year: "2024", type: "conference", abstract: "Sentiment analysis, the computational study of opinions, emotions, and attitudes expressed in text, has become increasingly vital in understanding public perception across various domains. In the context of Bangla, a language rich in cultural nuances and expressions, sentiment analysis poses unique challenges. Unlike English, where sentiment analysis has seen substantial advancements, Bangla sentiment analysis presents a more intricate landscape with its distinct linguistic structures and cultural subtleties. Bangla sentiment analysis confronts the complexity of categorizing text into three primary classes: positive, negative, and neutral sentiments. While this tripartite classification mirrors similar frameworks in other languages, the nuances of sentiment expression in Bangla make the task notably arduous. From colloquial expressions to regional dialects, Bangla embodies a spectrum of linguistic diversity that adds layers of intricacy to sentiment analysis. Moreover, the scarcity of labeled datasets and resources tailored for Bangla sentiment analysis exacerbates the challenge. Unlike English, where abundant resources facilitate sentiment analysis tasks, Bangla lacks comparable repositories, making the development of accurate sentiment analysis models a formidable endeavor. We used LSTM and Bi-LSTM approach to classify the labeled dataset. Our model achieved an overall accuracy of99% in LSTM, indicating the proportion of correctly classified instances across all classes. The macro-average F1-score, calculated as the average F1-score across all classes, is 98%, while the weighted-average F1-score, which considers class imbalance, is 98%. These metrics collectively assess the model's ability to correctly classify instances across different classes, providing insights into its overall performance." },
    { title: "Optimizing Vehicle Insurance Processing Through Advanced Deep Learning Models", authors: "Sadman Sadik Khan*, Afraz Ul Haque Rupak, Md. Sadekur Rahman", venue: "15th ICCCNT 2024", publisher: "IEEE", year: "2024", type: "conference", abstract: "This paper presents a novel method for predicting insurance claims by utilizing artificial intelligence, specifically a deep learning model within the ConvolutionalNeural Network (CNN) framework. The purpose is to automate and simplify the insurance claims process. The model utilizes computer vision technology to precisely detect and identify cardamage, resulting in a substantial reduction in the processing time for insurance claims. The article describes the creation of a specialized dataset consisting of actual photographs of vehicles that have been wrecked. It also assesses multiple deep learning models, ultimately finding that InceptionV3 is the most successful, achieving an accuracy rate of 97%. The suggested AI system seeks to improve the efficiency of claims processing and decrease the need for human evaluation. This would provide a more dependable and efficient method for handling automobile insurance claims after accidents." },
    { title: "CyberSentry: Machine Learning Algorithms for Early Detection of Cyberbullying on Twitter", authors: "Sadman Sadik Khan*, Syed Nazil Al Ahad, Mahmud Kabir Yousuf, Afraz Ul Haque Rupak, Nuzhat Noor Islam Prova, Md Maruf Rahman", venue: "15th ICCCNT 2024", publisher: "IEEE", year: "2024", type: "conference", abstract: "Cyberbullying, a great trouble enabled by using virtual communication systems, offers massive barriers to the intellectual and emotional fitness of people, particularly young adults and teenagers. The rise of social media and the potential to stay anonymous online has substantially elevated its presence and has an effect on the global. As a reaction, researchers have resorted to employing device gaining knowledge of techniques for the motive of identifying and reducing the impact of the problem. This takes a look at cutting-edge research on the detection of cyberbullying, with a selected emphasis on the utilization of device learning strategies for analyzing Twitter data. The facts pretreatment tiers, which contain the removal of stop words, stemming, and lemmatization, are defined intensively. The analysis of the dataset provides valuable insights into the distribution and properties of the accrued statistics. Following the cleansing process, any duplicate values are removed, and the length of the textual content is chosen for educational functions. The dataset is partitioned into separate education and trying outsets, and the elegance distribution is equalized using SMOTE. The overall performance of 4 system mastering algorithms—Logistic Regression, Decision Tree, Naïve Bayes, and Random Forest—is compared. Random Forest outperformed the other methods in terms of precision, recall, F1score, and accuracy. Confusion matrices offer further understanding of the performance of a model. In summary, this work emphasizes the significance of machine learning in tackling cyberbullying and proposes potential areas for further investigation." },
    { title: "Breaking the Fake News Barrier: Deep Learning Approaches in Bangla Language", authors: "Pronoy Kumar Mondal, Sadman Sadik Khan*, Md. Masud Rana, Shahriar Sultan Ramit, Abdus Sattar, Md Sadekur Rahman", venue: "15th ICCCNT 2024", publisher: "IEEE", year: "2024", type: "conference", abstract: "The rapid development of digital stages has greatly compounded the dispersal of untrue data, dissolving certainty and judgment in society, especially among the Bengali-speaking community. Our ponder addresses this critical issue by presenting an interesting strategy that utilizes a profound learning innovation, particularly the Gated Repetitive Unit (GRU), to recognize fake news within the Bangla dialect. The strategy of our proposed work incorporates intensive information preprocessing, which includes lemmatization, tokenization, and tending to course awkward nature by oversampling. This comes about in a dataset containing 58,478 passages. We appreciate the creation of a demonstration based on GRU (Gated Repetitive Unit) that illustrates remarkable execution with a noteworthy precision rate of 94%. This ponder gives an intensive clarification of the methods included in planning the information, selecting the show, preparing it, and assessing its execution. The performance of the model is investigated by reliable metrics like precision, recall, F1 score, and accuracy. The commitment of the work incorporates making a huge fake news dataset in Bangla and a demonstration that has outperformed other Bangla fake news location models." },
    { title: "AI Dermatologist: Skin Cancer Detection with Deep Learning Techniques", authors: "Afraz Ul Haque Rupak, Sadman Sadik Khan*, Alaya Parvin Alo, Rupa Ghosh, Md Fatin Ishrak, Md Sanowar Hossain Sabuj", venue: "15th ICCCNT 2024", publisher: "IEEE", year: "2024", type: "conference", abstract: "This paper explores the application of deep learning technologies in the detection and diagnosis of skin cancer, leveraging advanced convolutional neural networks(CNNs) such as VGG-16, ResNet50, and MobileNetV2. Given the increasing incidence of skin cancer worldwide, there is a critical need for more accurate and efficient diagnostic methods. Our study employs transfer learning to enhance the capability of these networks, enabling them to detect skin cancer from dermoscopic images with a high degree of accuracy, often surpassing human expert performance. We detail the process of data collection, preprocessing, model training, and evaluation, emphasizing the adaptation of these models to skin cancer detection. The results demonstrate significant improvements in diagnostic accuracy, with MobileNetV2 showing notable efficiency in processing and resource utilization—qualities that are ideal for real-time diagnostic applications. In MobileNetV2, we achieved 97% accuracy. Furthermore, the study addresses the challenges of adversarial attacks and the integration of non-image data to refine diagnostic procedures. Our findings highlight the transformative potential of AI in medical diagnostics, suggesting that deep learning could become a cornerstone in the early detection and treatment of skin cancer, thereby improving patient outcomes substantially." },
    { title: "Exploring Authorial Style in Bangla Literature: LSTM and Bi-LSTM-Based Author Detection", authors: "Pronoy Kumar Mondal, Sadman Sadik Khan*, Md Toufiq Imrog, Md Ainul Ahsan Arman, Md Muhetul Islam, Afraz Ul Haque Rupak", venue: "15th ICCCNT 2024", publisher: "IEEE", year: "2024", type: "conference", abstract: "Authorship attribution, a critical task incomputational etymology, includes distinguishing the author ofa text based on complex subtleties. In order to address the issueswith authorship attribution in Bengali literary texts, this papercompares two deep learning models: Bidirectional Long Short-Term Memory (Bi-LSTM), enhanced by Adam and RMSpropoptimizers, and Long Short-Term Memory (LSTM). Utilizing adataset comprising writings from nine prominent Bengaliauthors, we explored the adequacy of these models indistinguishing between different composing styles. Thoroughpreprocessing, feature engineering, and an experimental setupwere all part of our methodology to assess the LSTM and Bi-LSTM models' performance in terms of various metrics likeaccuracy, precision, recall, and F1 score. The results show thatthe Bi-LSTM model, optimized with Adam, achieved the highesttesting accuracy of 92%, illustrating its predominant capabilityto generalize from preparing information to inconspicuousinformation. Also, we watched striking contrasts in modelperformance between training and testing phases, proposingpotential zones for enhancement in demonstration preparationand generalization. This study not only underscores thepotential of LSTM and Bi-LSTM models in authorshipattribution but also highlights the significance of optimizingmodel configurations to improve performance. Furtherresearch aims to improve these models, look into additionalinclude sets, and expand the analysis to other languages andliterary forms." },
    { title: "Bangla Handwritten Digit Recognition Using Deep Learning Models", authors: "Md Shefat Al Mahmud*, Sadman Sadik Khan, Md. Sadekur Rahman, Nayeem Ahmed, Nuzhat Noor Islam Prova, Amit Kumar Gupta", venue: "15th ICCCNT 2024", publisher: "IEEE", year: "2024", type: "conference", abstract: "There are a lot of works on English handwritten materials but not seen so much work on Bangla handwritten recognition. Bangla handwritten digits have more complex and diverse shapes and also have high inter-class similarities. So it is more challenging to recognize Bangla handwritten digits. The paper focuses on improving the lack of Bangla handwritten digit recognition approach using deep learning models. In the research, we have developed three deep learning-based models, CNN, DenseNet121, and ResNet50 to recognize Bangla digits. To make our work efficient we have used two existing BanglaLekha-Isolated-Numerics and Ekush datasets along with a new dataset that is collected by our team. We tested the three models on each dataset and achieved remarkable performance in all the datasets. Among the models, DenseNet121 outperformed on every dataset. DenseNet121 achieved 99.09% test accuracy on the Ekush dataset and 97.65% test accuracy on our developed dataset." },
    { title: "Deep Learning-Based Alzheimer's Disease Detection Using 2D MRI Images", authors: "Abu Hanzala*, Md. Sadekur Rahman, Sadman Sadik Khan, Md Maruf Rahman, Md. Sajjad, Amit Kumar Gupta", venue: "15th ICCCNT 2024", publisher: "IEEE", year: "2024", type: "conference", abstract: "About 50 million people in this world are affected by Alzheimer’s disease. Alzheimer’s disease is a type of dementia. It is a type of neurological disorder that causes changes in peoples’ memory, thinking ability, and behavior. The main reason for this is the destruction of human brain cells. Symptoms of this disease first appear in people of 60 years of age. People age 65 and older are at greatest risk. It is a progressive disease and where dementia symptoms gradually worsen. That is why it is very important to treat this disease if it is affected. Over the years deep learning models have shown significant results in medical image analysis including classification. This study presents a prediction model using MRI images of the brain, a deep learning model for the AD classification, specifically EfficientNetB0, and EfficientNetV2B. For classification, a dataset consisting of 2D MRI images of patients’ brains with varying stages of dementia, including nondemented individuals and those with very mild, mild, and moderate dementia were used. Finally, the performance of the models were measured using metrics such as accuracy, loss, and Scott’s Pi coefficient and were compared. The proposed model is able to accurately classify AD stages from brain MRI images. This model highlights deep learning models are as valuable tools for AD diagnosis and classification, paving the way for improved disease and management strategies." },
    { title: "Performance Evaluation of YOLO Models for Detecting Bangladeshi License Plates", authors: "Shahriar Sultan Ramit*, Alaya Parvin Alo, Sm Shaqib, Sadman Sadik Khan, Afraz Ul Haque Rupak, Md Sadekur Rahman", venue: "15th ICCCNT 2024", publisher: "IEEE", year: "2024", type: "conference", abstract: "This research paper presents a comprehensive investigation into the effectiveness of YOLO (You Only Look Once) models, namely YOLOv5, YOLOv7, and YOLOv8, in the domain of Bangladeshi license plate detection. With the escalating demand for precise license plate recognition systems to facilitate efficient traffic management and bolster law enforcement efforts, this study conducts an in-depth evaluation of these models. Central to our methodology is the development of a specialized dataset comprising Bangladeshi license plate images, reflecting the unique characteristics and challenges prevalent in this geographical context. Through meticulous dataset curation, model training, and rigorous testing procedures, we ascertain the performance metrics of each YOLO variant. Notably, our findings reveal YOLOv8 as the most proficient model, achieving a remarkable mean average precision (mAP) score of 0.934, with precision 0.93 and recall 0.906. The insights gleaned from this research contribute significantly to the advancement of intelligent transportation systems and public safety initiatives in Bangladesh, offering tailored solutions for license plate detection challenges in this specific locale." },
    { title: "Vehicle Speed Detection System Utilizing YOLOv8: Enhancing Road Safety and Traffic Management for Metropolitan Areas", authors: "S M Shaqib*, Alaya Parvin Alo, Shahriar Sultan Ramit, Afraz Ul Haque Rupak, Sadman Sadik Khan, Md. Sadekur Rahman", publisher: "arXiv", year: "2024", type: "preprint", abstract: "In order to ensure traffic safety through a reduction in fatalities and accidents, vehicle speed detection is essential. Relentless driving practices are discouraged by the enforcement of speed restrictions, which are made possible by accurate monitoring of vehicle speeds. Road accidents remain one of the leading causes of death in Bangladesh. The Bangladesh Passenger Welfare Association stated in 2023 that 7,902 individuals lost their lives in traffic accidents during the course of the year. Efficient vehicle speed detection is essential to maintaining traffic safety. Reliable speed detection can also help gather important traffic data, which makes it easier to optimize traffic flow and provide safer road infrastructure. The YOLOv8 model can recognize and track cars in videos with greater speed and accuracy when trained under close supervision. By providing insights into the application of supervised learning in object identification for vehicle speed estimation and concentrating on the particular traffic conditions and safety concerns in Bangladesh, this work represents a noteworthy contribution to the area. The MAE was 3.5 and RMSE was 4.22 between the predicted speed of our model and the actual speed or the ground truth measured by the speedometer Promising increased efficiency and wider applicability in a variety of traffic conditions, the suggested solution offers a financially viable substitute for conventional approaches." },
  ],

  projects: [
    { title: "Medicinal Leaf Health Classification System", description: "Comprehensive classification system with 22 classes and 22,000 images. Comparing CNN backbones with BERT-family hybrids, CLIP/BiomedCLIP fine-tuning, and LLaMA-3.2-1B with LoRA.", tags: ["Computer Vision", "CNN", "Transfer Learning", "LoRA", "LLM"], year: "2024" },
    { title: "Bone Fracture Classification (MSc Thesis)", description: "Comparative analysis of CNN-ML, GNN, and LLM models for bone fracture classification in radiographic images using a ResNet50 UNet encoder.", tags: ["Medical Imaging", "GNN", "LLM", "CNN", "X-Ray"], year: "2025" },
    { title: "sadikV3: CNN+GNN Hybrid Architecture", description: "Novel hybrid architecture combining InceptionV3 with GraphSAGE via the Epsilon technique for advanced visual classification tasks.", tags: ["GNN", "CNN", "Hybrid Architecture", "GraphSAGE"], year: "2024" },
    { title: "Bangla ML/DL Educational Book", description: "Co-authored a comprehensive Bangla-language book on Machine Learning and Deep Learning covering ML mathematics through the full pipeline. Published March 2026.", tags: ["Education", "Bangla NLP", "ML/DL", "Book"], year: "2026" },
  ],

  education: [
    { degree: "MSc", field: "Computer Science & Engineering (Major: Data Science)", university: "Daffodil International University, Dhaka, Bangladesh", year: "2024 – 2025", cgpa: "3.89 / 4.00", thesis: "Comparative Analysis of CNN Integrated ML, GNN, and LLM Models for Bone Fracture Classification in Radiographic Images" },
    { degree: "BSc", field: "Computer Science & Engineering", university: "Daffodil International University, Dhaka, Bangladesh", year: "2020 – 2024", cgpa: "3.86 / 4.00", thesis: "Optimizing Vehicle Insurance Processing through Advanced Deep Learning Models" },
    { degree: "HSC", field: "Science", university: "Kaliganj Govt. College, Kaliganj, Satkhira", year: "2017 – 2019", cgpa: "5.00 / 5.00", thesis: "" },
    { degree: "SSC", field: "Science", university: "Nalta High School, Kaliganj, Satkhira", year: "2015 – 2017", cgpa: "5.00 / 5.00", thesis: "" },
  ],

  experience: [
    { role: "Lecturer (CSE)", department: "Department of Business Administration", organization: "Daffodil International University", period: "January 2026 – Present", description: "Teaching undergraduate course: Programming for Business Analytics (Theory & Lab). Strengthening BBA students' computational and analytical skills through Python programming.", current: true },
    { role: "Lecturer", department: "Department of Computer Science & Engineering", organization: "Daffodil International University", period: "May 2025 – December 2025", description: "Teaching undergraduate courses in Discrete Mathematics, Compiler Design (Theory & Lab), Computer Graphics (Theory & Lab), Object Oriented Programming, Art of Living. Supervising undergraduate projects and mentoring student research activities.", current: false },
    { role: "Lecturer (Part-Time)", department: "Department of Computer Science & Engineering", organization: "Daffodil International University", period: "January 2025 – April 2025", description: "Delivered courses on Data Mining & Machine Learning and Artificial Intelligence. Supported student research leading to peer-reviewed conference publications.", current: false },
    { role: "Graduate Teaching Assistant (GTA)", department: "Department of Computer Science & Engineering", organization: "Daffodil International University", period: "August 2024 – January 2025", description: "Assisted in course delivery, assessments, and academic coordination under supervision of Dr. S. M. Aminul Haque.", current: false },
  ],

  trainings: [
    { title: "Advanced Machine Learning & Deep Learning Bootcamp Trainer", organization: "Daffodil International University", year: "May 2023 – Dec 2023", description: "Trained 100+ students on ML/DL techniques, guided hands-on projects, and promoted practical research skills.", icon: "🧑‍🏫" },
  ],

  activities: [
    { title: "President, DIU NLP & Machine Learning Research Lab", organization: "Daffodil International University", year: "2023 – 2024", description: "Led lab activities, coordinated research projects, and supervised student researchers in Deep Learning, Computer Vision, LLMs, and GNNs.", category: "leadership" },
    { title: "Lab Prefect", organization: "Daffodil International University", year: "Jan 2023 – Jun 2024", description: "Assisted faculty in teaching OOP (Python), Data Mining, Machine Learning, AI, and Research Innovation courses; managed lab operations and student mentoring.", category: "leadership" },
    { title: "Organizer, National Data Analytics Competition (NDAC-25)", organization: "Daffodil International University", year: "2025", description: "Managed competition logistics, datasets, and student participation for a national-level event.", category: "event" },
    { title: "Organizer, CodeConomics 2.0: Programming Challenge for Non-Programmers", organization: "Daffodil International University", year: "2026", description: "Managed competition logistics, question sets, and student participation for a national-level event.", category: "event" },
    { title: "Organizer, Intra-University Dataset Contest (CD-24)", organization: "Daffodil International University", year: "2024", description: "Coordinated submissions, evaluation, and judging for student competitions in data analytics.", category: "event" },
    { title: "Volunteer, Data Science Olympiad", organization: "Conference on Big Data, IoT, and Machine Learning (BIM 2023)", year: "2023", description: "Assisted in event coordination, dataset preparation, and participant engagement.", category: "volunteer" },
    { title: "Hult Prize On-Campus Champion", organization: "Daffodil International University", year: "2020", description: "Led campus-level team for social entrepreneurship competition.", category: "competition" },
  ],
};

// ============================================================
// RENDER HELPERS
// ============================================================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

const PUB_COLORS = { IEEE: "#00aaff", Springer: "#ff7040", "Taylor & Francis": "#a78bfa", Book: "#34d399", Other: "#94a3b8" };

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// Bold "Sadman Sadik Khan" (with or without * suffix) in author lists
function formatAuthors(authors) {
  return escapeHTML(authors).replace(
    /Sadman Sadik Khan(\*?)/g,
    '<strong class="author-self">Sadman Sadik Khan$1</strong>'
  );
}

// ---- Publications ----
const DEFAULT_ABSTRACT = "Abstract coming soon — check back shortly, or view the full paper via the publisher link once available.";

function renderPublications(filter = "all") {
  const container = $("#pubContainer");
  const pubs = filter === "all" ? DATA.publications : DATA.publications.filter(p => p.type === filter);

  const byYear = {};
  pubs.forEach(p => { (byYear[p.year] ||= []).push(p); });
  const years = Object.keys(byYear).sort((a, b) => b - a);

  container.innerHTML = years.map(year => `
    <div class="year-group reveal">
      <div class="year-head">
        <span class="year-label">${year}</span>
        <div class="year-line"></div>
        <span class="year-count">${byYear[year].length} paper${byYear[year].length > 1 ? "s" : ""}</span>
      </div>
      ${byYear[year].map(pub => {
        const pubIndex = DATA.publications.indexOf(pub);
        return `
        <div class="pub-card" data-pub-index="${pubIndex}" role="button" tabindex="0" aria-expanded="false">
          <div class="pub-card-row">
            ${pub.coverImage ? `<img src="${pub.coverImage}" alt="${escapeHTML(pub.title)} cover" class="pub-cover-thumb" />` : ""}
            <div class="pub-card-main">
              <div class="pub-title">${escapeHTML(pub.title)} <span class="pub-expand-icon">▾</span></div>
              <div class="pub-authors">${formatAuthors(pub.authors)}</div>
              <div class="pub-meta">
                <span class="pub-venue">${escapeHTML(pub.venue)}</span>
                <span class="pub-badge" style="background:${PUB_COLORS[pub.publisher]}22; color:${PUB_COLORS[pub.publisher]}; border-color:${PUB_COLORS[pub.publisher]}44;">${escapeHTML(pub.publisher)}</span>
                <span class="pub-type-badge">${escapeHTML(pub.type)}</span>
              </div>
            </div>
          </div>
          <div class="pub-abstract-panel">
            <div class="pub-abstract-inner">
              ${pub.coverImage ? `<img src="${pub.coverImage}" alt="${escapeHTML(pub.title)} cover" class="pub-cover-large" />` : ""}
              <div>
                <span class="pub-abstract-label">Abstract</span>
                <p class="pub-abstract-text">${escapeHTML(pub.abstract || DEFAULT_ABSTRACT)}</p>
              </div>
            </div>
          </div>
        </div>
      `;
      }).join("")}
    </div>
  `).join("");

  observeReveal();
  setupPubCardToggle();
}

function setupPubCardToggle() {
  $$(".pub-card").forEach(card => {
    const toggle = () => {
      const isOpen = card.classList.toggle("expanded");
      card.setAttribute("aria-expanded", isOpen ? "true" : "false");
    };
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
  });
}

function setupPubFilters() {
  $$(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderPublications(btn.dataset.filter);
    });
  });
}

// ---- Projects ----
function renderProjects() {
  $("#projectsGrid").innerHTML = DATA.projects.map(p => `
    <div class="project-card reveal">
      <div class="project-head">
        <h3 class="project-title">${escapeHTML(p.title)}</h3>
        <span class="project-year">${escapeHTML(p.year)}</span>
      </div>
      <p class="project-desc">${escapeHTML(p.description)}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="project-tag">${escapeHTML(t)}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// ---- Education ----
function renderEducation() {
  $("#educationList").innerHTML = DATA.education.map(edu => `
    <div class="edu-card reveal">
      <div class="edu-year-badge">${escapeHTML(edu.year)}</div>
      <div class="edu-content">
        <span class="degree-badge">${escapeHTML(edu.degree)}</span>
        <div class="edu-field">${escapeHTML(edu.field)}</div>
        <div class="edu-uni">${escapeHTML(edu.university)}</div>
        ${edu.cgpa ? `<div class="edu-cgpa">CGPA: ${escapeHTML(edu.cgpa)}</div>` : ""}
        ${edu.thesis ? `
          <div class="edu-thesis">
            <span class="edu-thesis-label">Thesis</span>
            <span class="edu-thesis-text">${escapeHTML(edu.thesis)}</span>
          </div>` : ""}
      </div>
    </div>
  `).join("");
}

// ---- Experience timeline ----
function renderExperience() {
  $("#experienceTimeline").innerHTML = `
    <div class="timeline-wrap">
      <div class="timeline-line"></div>
      ${DATA.experience.map(job => `
        <div class="timeline-item reveal">
          <div class="timeline-dot ${job.current ? "current" : ""}">${job.current ? "★" : "○"}</div>
          <div class="timeline-card">
            <div class="timeline-head">
              <div>
                <div class="timeline-role">${escapeHTML(job.role)}</div>
                <div class="timeline-dept">${escapeHTML(job.department)}</div>
                <div class="timeline-org">${escapeHTML(job.organization)}</div>
              </div>
              <div class="timeline-badge-wrap">
                <span class="timeline-badge ${job.current ? "current" : ""}">${job.current ? "● Current" : escapeHTML(job.period)}</span>
                ${job.current ? `<span class="timeline-period-sub">${escapeHTML(job.period)}</span>` : ""}
              </div>
            </div>
            <p class="timeline-desc">${escapeHTML(job.description)}</p>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

// ---- Training ----
function renderTraining() {
  $("#trainingGrid").innerHTML = DATA.trainings.map(t => `
    <div class="project-card training-card reveal">
      <div class="training-icon">${t.icon || "🏆"}</div>
      <div>
        <div class="training-info-title">${escapeHTML(t.title)}</div>
        <div class="training-info-org">${escapeHTML(t.organization)}</div>
        <div class="training-info-year">${escapeHTML(t.year)}</div>
        ${t.description ? `<div class="training-desc">${escapeHTML(t.description)}</div>` : ""}
      </div>
    </div>
  `).join("");
}

// ---- Activities ----
const CATEGORY_LABELS = { leadership: "Leadership", event: "Event Organization", volunteer: "Volunteering", competition: "Competition" };
const CATEGORY_CLASS = { leadership: "cat-leadership", event: "cat-event", volunteer: "cat-volunteer", competition: "cat-competition" };

// ---- Profile links, IDs & metrics (Home hero + Contact) ----
// Driven entirely by the PROFILES object at the top of this file.
// Update PROFILES once and both Home and Contact stay in sync.
function isPlaceholderUrl(url) {
  return /0000-0000-0000-0000|PLACEHOLDER/i.test(url);
}

function renderProfileLinks() {
  // 1. Hero stat counters (Citations / RG Reads) — read live targets from PROFILES
  const citationsEl = $("#statCitations");
  const readsEl = $("#statReads");
  if (citationsEl) citationsEl.dataset.target = PROFILES.googleScholar.citations;
  if (readsEl) readsEl.dataset.target = PROFILES.researchGate.reads;

  // 2. Hero pill links (Home) — Scholar, ResearchGate, ORCID, Web of Science, Scopus, LinkedIn, Email
  const orcidPlaceholder = isPlaceholderUrl(PROFILES.orcid.url);
  const wosPlaceholder = isPlaceholderUrl(PROFILES.webOfScience.url);
  const scopusPlaceholder = isPlaceholderUrl(PROFILES.scopus.url);

  const heroLinksHTML = `
    <a href="${PROFILES.googleScholar.url}" target="_blank" rel="noopener" class="pill-link">Google Scholar ↗</a>
    <a href="${PROFILES.researchGate.url}" target="_blank" rel="noopener" class="pill-link">ResearchGate ↗</a>
    <a href="${PROFILES.orcid.url}" target="_blank" rel="noopener" class="pill-link ${orcidPlaceholder ? "placeholder" : ""}">ORCID ↗</a>
    <a href="${PROFILES.webOfScience.url}" target="_blank" rel="noopener" class="pill-link ${wosPlaceholder ? "placeholder" : ""}">Web of Science ↗</a>
    <a href="${PROFILES.scopus.url}" target="_blank" rel="noopener" class="pill-link ${scopusPlaceholder ? "placeholder" : ""}">Scopus ↗</a>
    <a href="${PROFILES.linkedin.url}" target="_blank" rel="noopener" class="pill-link">LinkedIn ↗</a>
  `;
  const heroLinks = $("#heroLinks");
  if (heroLinks) heroLinks.innerHTML = heroLinksHTML;

  // 3. Contact grid (Contact section) — plain link buttons, no metrics
  const contactCards = [
    { icon: "✉", label: "Email", value: PROFILES.email, href: `mailto:${PROFILES.email}` },
    { icon: "📱", label: "Phone", value: PROFILES.phone, href: `tel:${PROFILES.phone.replace(/\s/g, "")}` },
    { icon: "🎓", label: "Google Scholar", value: "View Profile", href: PROFILES.googleScholar.url },
    { icon: "🔬", label: "ResearchGate", value: "View Profile", href: PROFILES.researchGate.url },
    { icon: "🆔", label: "ORCID", value: orcidPlaceholder ? "Add your iD in script.js" : "View Profile", href: PROFILES.orcid.url, placeholder: orcidPlaceholder },
    { icon: "📊", label: "Web of Science", value: wosPlaceholder ? "Add your RID in script.js" : "View Profile", href: PROFILES.webOfScience.url, placeholder: wosPlaceholder },
    { icon: "📚", label: "Scopus", value: scopusPlaceholder ? "Add your Author ID in script.js" : "View Profile", href: PROFILES.scopus.url, placeholder: scopusPlaceholder },
    { icon: "💼", label: "LinkedIn", value: "View Profile", href: PROFILES.linkedin.url },
  ];

  $("#contactGrid").innerHTML = contactCards.map(c => `
    <a href="${c.href}" ${c.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""} class="contact-card glass-card ${c.placeholder ? "placeholder" : ""}">
      <div class="contact-icon">${c.icon}</div>
      <div><div class="contact-label">${escapeHTML(c.label)}</div><div class="contact-value">${escapeHTML(c.value)}</div></div>
    </a>
  `).join("");
}

function renderActivities() {
  const groups = {};
  DATA.activities.forEach(a => { (groups[a.category] ||= []).push(a); });

  $("#activitiesContainer").innerHTML = Object.keys(CATEGORY_LABELS)
    .filter(cat => groups[cat])
    .map(cat => `
      <div class="activity-group reveal">
        <h3 class="subhead">${CATEGORY_LABELS[cat]}</h3>
        <div class="activity-grid">
          ${groups[cat].map(a => `
            <div class="activity-card ${CATEGORY_CLASS[cat]}">
              <div class="activity-title">${escapeHTML(a.title)}</div>
              <div class="activity-org">${escapeHTML(a.organization)}</div>
              <div class="activity-year">${escapeHTML(a.year)}</div>
              ${a.description ? `<div class="activity-desc">${escapeHTML(a.description)}</div>` : ""}
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");
}

// ============================================================
// INTERACTIVITY
// ============================================================

// ---- Navbar scroll state ----
function setupNavbarScroll() {
  const navbar = $("#navbar");
  const backToTop = $("#backToTop");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 40;
    navbar.classList.toggle("scrolled", scrolled);
    backToTop.classList.toggle("visible", window.scrollY > 600);
  });
}

// ---- Mobile nav toggle ----
function setupMobileNav() {
  const toggle = $("#navToggle");
  const links = $("#navLinks");
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    links.classList.toggle("open");
  });
  $$(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      toggle.classList.remove("open");
      links.classList.remove("open");
    });
  });
}

// ---- Active nav link on scroll (IntersectionObserver) ----
function setupActiveNavHighlight() {
  const sections = $$("section[id]");
  const navLinks = $$(".nav-link");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle("active", link.dataset.section === id);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });

  sections.forEach(sec => observer.observe(sec));
}

// ---- Animated stat counters ----
function setupStatCounters() {
  const statEls = $$(".stat-num");
  let started = false;

  function animateCounters() {
    if (started) return;
    started = true;
    statEls.forEach(el => {
      if (!el.dataset.target) return; // skip non-numeric cards (e.g. ORCID/WoS icon cards)
      const target = parseInt(el.dataset.target, 10);
      if (Number.isNaN(target)) return;
      let current = 0;
      const duration = 1200;
      const stepTime = 16;
      const steps = duration / stepTime;
      const increment = target / steps;

      const tick = () => {
        current += increment;
        if (current >= target) {
          el.textContent = target.toLocaleString();
        } else {
          el.textContent = Math.floor(current).toLocaleString();
          requestAnimationFrame(() => setTimeout(tick, stepTime));
        }
      };
      tick();
    });
  }

  const heroStats = $("#heroStats");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });
  observer.observe(heroStats);
}

// ---- Scroll reveal animation ----
let revealObserver = null;
function observeReveal() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  }
  $$(".reveal:not(.visible)").forEach(el => revealObserver.observe(el));
}

// ---- Back to top button ----
function setupBackToTop() {
  $("#backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ---- Set footer year ----
function setFooterYear() {
  $("#year").textContent = new Date().getFullYear();
}

// ============================================================
// INIT
// ============================================================
// ---- Skills ----
const SKILLS = {
  "Programming Languages": {
    icon: "💻",
    color: "#6395ff",
    items: ["Python", "C"]
  },
  "Libraries & Frameworks": {
    icon: "📦",
    color: "#a78bfa",
    items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "OpenCV", "Hugging Face Transformers"]
  },
  "Deep Learning Models": {
    icon: "🧠",
    color: "#34d399",
    items: ["MobileNetV2", "DenseNet121", "VGG16", "VGG19", "ResNet", "InceptionV3", "Vision Transformers (ViT)", "LSTM", "Bi-LSTM", "YOLO (v5, v8)", "Attention Mechanisms"]
  },
  "Graph Neural Networks": {
    icon: "🔗",
    color: "#fbbf24",
    items: ["GCN", "GAT", "GraphSAGE", "GIN"]
  },
  "Large Language Models": {
    icon: "🤖",
    color: "#f472b6",
    items: ["Bangla BERT", "mBERT", "DistilBERT", "DeBERTa", "XLM-RoBERTa", "mT5", "Bangla T5", "GPT-2"]
  },
  "Explainable AI (XAI)": {
    icon: "🔍",
    color: "#38bdf8",
    items: ["LIME", "SHAP", "Grad-CAM", "Grad-CAM++"]
  },
  "Research Domains": {
    icon: "🔬",
    color: "#fb7185",
    items: [
      "Medical Imaging (X-Ray, MRI, Retina, Blood Cell, Skin Cancer, Pneumonia, Alzheimer's, Lung Cancer)",
      "Agriculture & Plant Health (Tea, Moringa, Potato, Eggplant, Tomato, Mango, Olive Leaf)",
      "Bangla NLP (Sentiment, Gender, Emotion, Fake News, Author Style, Transliteration)",
      "Computer Vision (Object Detection, Scene Classification, UAV Thermal Imaging)",
      "Cybersecurity (Malware, Phishing, Cyberbullying Detection)"
    ]
  },
  "Research Skills": {
    icon: "📊",
    color: "#4ade80",
    items: ["Experimental Design", "Data Preprocessing", "Model Training & Optimization", "Performance Evaluation", "Explainable AI", "Reproducible Research", "Scientific Writing"]
  }
};

function renderSkills() {
  const container = $("#skillsContainer");
  if (!container) return;
  container.innerHTML = Object.entries(SKILLS).map(([category, { icon, color, items }]) => `
    <div class="skill-group reveal">
      <div class="skill-group-header">
        <span class="skill-icon">${icon}</span>
        <h3 class="skill-category" style="color:${color}">${escapeHTML(category)}</h3>
      </div>
      <div class="skill-tags">
        ${items.map(item => `<span class="skill-tag" style="border-color:${color}44; color:${color}; background:${color}11">${escapeHTML(item)}</span>`).join("")}
      </div>
    </div>
  `).join("");
  observeReveal();
}

// ---- CV Viewer ----
let cvPdf = null;
let cvCurrentSpread = 1; // which pair of pages we're on (1-based, step 2)

async function setupCVViewer() {
  const wrap = $("#cvPagesWrap");
  if (!wrap || typeof pdfjsLib === "undefined") return;

  try {
    const loadingTask = pdfjsLib.getDocument("Sadman_Sadik_Khan_CV.pdf");
    cvPdf = await loadingTask.promise;
    await renderCVSpread(1);
  } catch (e) {
    wrap.innerHTML = `<div class="cv-error">Could not load PDF. <a href="Sadman_Sadik_Khan_CV.pdf" target="_blank">Open directly →</a></div>`;
    console.error("PDF load error:", e);
  }
}

async function renderCVSpread(startPage) {
  if (!cvPdf) return;
  const totalPages = cvPdf.numPages;
  cvCurrentSpread = startPage;

  const infos = [$("#cvPageInfo"), $("#cvPageInfo2")];
  const label = `Pages ${startPage}–${Math.min(startPage + 1, totalPages)} of ${totalPages}`;
  infos.forEach(el => { if (el) el.textContent = label; });

  // Enable/disable nav buttons
  [$("#cvPrevBtn"), $("#cvPrevBtn2")].forEach(btn => { if (btn) btn.disabled = startPage <= 1; });
  [$("#cvNextBtn"), $("#cvNextBtn2")].forEach(btn => { if (btn) btn.disabled = startPage + 1 >= totalPages; });

  // Render both canvases
  const canvasIds = ["cvCanvas1", "cvCanvas2"];
  const pages = [startPage, startPage + 1];

  for (let i = 0; i < 2; i++) {
    const canvas = $(`#${canvasIds[i]}`);
    if (!canvas) continue;
    const pageNum = pages[i];

    if (pageNum > totalPages) {
      canvas.style.display = "none";
      continue;
    }
    canvas.style.display = "block";

    const page = await cvPdf.getPage(pageNum);
    const containerWidth = Math.min(560, ($("#cvPagesWrap").offsetWidth - 24) / 2);
    const viewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / viewport.width;
    const scaledViewport = page.getViewport({ scale });

    canvas.width = scaledViewport.width;
    canvas.height = scaledViewport.height;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    await page.render({ canvasContext: ctx, viewport: scaledViewport }).promise;
  }
}

function setupCVNavButtons() {
  const go = (dir) => {
    if (!cvPdf) return;
    const next = cvCurrentSpread + dir * 2;
    if (next >= 1 && next <= cvPdf.numPages) renderCVSpread(next);
  };
  ["cvPrevBtn", "cvPrevBtn2"].forEach(id => {
    const btn = $(`#${id}`);
    if (btn) btn.addEventListener("click", () => go(-1));
  });
  ["cvNextBtn", "cvNextBtn2"].forEach(id => {
    const btn = $(`#${id}`);
    if (btn) btn.addEventListener("click", () => go(1));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderPublications("all");
  setupPubFilters();
  renderProjects();
  renderEducation();
  renderExperience();
  renderTraining();
  renderActivities();
  renderSkills();
  renderProfileLinks(); // must run before setupStatCounters() reads data-target

  setupNavbarScroll();
  setupMobileNav();
  setupActiveNavHighlight();
  setupStatCounters();
  setupBackToTop();
  setupCVNavButtons();
  setFooterYear();

  // Mark static reveal targets (hero/about cards) and observe everything
  $$(".glass-card, .stat-card").forEach(el => el.classList.add("reveal"));
  observeReveal();

  // Lazy-load CV viewer when section comes into view
  const cvSection = $("#cv");
  if (cvSection) {
    const cvObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setupCVViewer();
          cvObserver.disconnect();
        }
      });
    }, { threshold: 0.1 });
    cvObserver.observe(cvSection);
  }
});
