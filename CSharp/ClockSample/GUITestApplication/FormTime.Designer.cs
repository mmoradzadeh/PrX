namespace GUITestApplication
{
    partial class FormTime
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.LabelTime = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // LabelTime
            // 
            this.LabelTime.Dock = System.Windows.Forms.DockStyle.Fill;
            this.LabelTime.Font = new System.Drawing.Font("Microsoft Sans Serif", 30F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.LabelTime.Location = new System.Drawing.Point(0, 0);
            this.LabelTime.Name = "LabelTime";
            this.LabelTime.Size = new System.Drawing.Size(800, 450);
            this.LabelTime.TabIndex = 0;
            this.LabelTime.Text = "label1";
            this.LabelTime.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // FormTime
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.LabelTime);
            this.MinimumSize = new System.Drawing.Size(200, 200);
            this.Name = "FormTime";
            this.Text = "Mehdi Moradzadeh Sample";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Label LabelTime;
    }
}

